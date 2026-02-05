"use client";

import TodoCard from "./TodoCard";
import Modal from "./Modal";
import CreateTodoCard from "./CreateTodoCard";
import classes from "./TodoCardList.module.css";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

type TodoCard = {
  id: string;
  title: string;
  body: string;
  createdOn: string;
};

export default function TodoCardList({
  isPosting,
  isNotPosting,
  newTodoCard,
}: {
  isPosting: boolean;
  isNotPosting: () => void;
  newTodoCard?: any;
}) {
  const [todos, setTodos] = useState<TodoCard[]>([]);

  // Fetch Firestore todos once on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "ToDoCardsNJohn"));
        const todosData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "",
            body: data.body || "",
            createdOn: data.createdOn || "",
          };
        });
        console.log("Firestore fetched todos:", todosData);
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Function to add a new todo card locally
  function addTodoCardHandler(newTodoCard: TodoCard) {
    setTodos((prevTodos) => [...prevTodos, newTodoCard]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={isNotPosting}>
          <CreateTodoCard onCancel={isNotPosting} newTodoCard={addTodoCardHandler} />
        </Modal>
      )}

      {todos.length > 0 && (
        <ul className={classes.todoCardList}>
          {todos.map((todoCard) => (
            <TodoCard
              key={todoCard.id}
              number={todos.indexOf(todoCard) + 1}
              cardTitle={todoCard.title}
              cardBody={todoCard.body}
              cardCreatedOn={todoCard.createdOn}
            />
          ))}
        </ul>
      )}

      {todos.length === 0 && <p style={{ textAlign: "center" }}>No To-Do Items. Please add one.</p>}
    </>
  );
}
