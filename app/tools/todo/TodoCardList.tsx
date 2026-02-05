"use client";

import TodoCard from "./TodoCard";
import Modal from "./Modal";
import CreateTodoCard from "./CreateTodoCard";
import classes from "./TodoCardList.module.css";
import { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

type TodoCard = {
  id: string;
  title: string;
  body: string;
  createdOn: string | { seconds: number; nanoseconds: number }; // can be Timestamp or string
};

export default function TodoCardList({
  isPosting,
  isNotPosting,
}: {
  isPosting: boolean;
  isNotPosting: () => void;
}) {
  const [todos, setTodos] = useState<TodoCard[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Real-time Firestore listener for todos
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "ToDoCardsNJohn"),
      (snapshot) => {
        const todosData = snapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            title: data.title || "",
            body: data.body || "",
            createdOn: data.createdOn || "",
          };
        });

        setTodos(todosData);
      },
      (error) => {
        console.error("Error fetching todos in real-time:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // Add a new todo card to Firestore and update state (state updates from onSnapshot)
  async function addTodoCardHandler(newTodoCard: { title: string; body: string }) {
    try {
      await addDoc(collection(db, "ToDoCardsNJohn"), {
        title: newTodoCard.title,
        body: newTodoCard.body,
        createdOn: serverTimestamp(),
      });
      // No need to update state here, onSnapshot listener will handle it
    } catch (error) {
      console.error("Error adding todo card:", error);
    }
  }

  // Helper to format Firestore timestamp or fallback string
  const formatDate = (createdOn: any) => {
    if (!isClient) return ""; // avoid hydration mismatch
    if (!createdOn) return "";
    // Firestore serverTimestamp resolves to { seconds, nanoseconds }
    if (typeof createdOn === "object" && "seconds" in createdOn) {
      return new Date(createdOn.seconds * 1000).toLocaleString();
    }
    // fallback if string
    return new Date(createdOn).toLocaleString();
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={isNotPosting}>
          <CreateTodoCard onCancel={isNotPosting} newTodoCard={addTodoCardHandler} />
        </Modal>
      )}

      {todos.length > 0 ? (
        <ul className={classes.todoCardList}>
          {todos.map((todoCard, index) => (
            <TodoCard
              key={todoCard.id}
              number={index + 1}
              cardTitle={todoCard.title}
              cardBody={todoCard.body}
              cardCreatedOn={formatDate(todoCard.createdOn)}
            />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>No To-Do Items. Please add one.</p>
      )}
    </>
  );
}