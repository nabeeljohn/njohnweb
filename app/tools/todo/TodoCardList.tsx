"use client";

import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import Modal from "./Modal";
import CreateTodoCard from "./CreateTodoCard";
import classes from "./TodoCardList.module.css";
import { subscribeTodos, addTodoCard, TodoCard as TodoCardType } from "../../../firebase/nextUpServices";

export default function TodoCardList({
  isPosting,
  isNotPosting,
}: {
  isPosting: boolean;
  isNotPosting: () => void;
}) {
  const [todos, setTodos] = useState<TodoCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // ensure client-only rendering to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Real-time Firestore subscription
  useEffect(() => {
    const unsubscribe = subscribeTodos((todosData) => {
      setTodos(todosData);
      setLoading(false); // stop loading once first snapshot arrives
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  // Add a new todo card
  const handleAddTodoCard = async (newTodoCard: { title: string; body: string }) => {
    try {
      await addTodoCard(newTodoCard);
      // no need to update state manually, subscription handles it
    } catch (error) {
      console.error("Error adding todo card:", error);
    }
  };

  // format Firestore timestamp safely
  const formatDate = (createdOn: any) => {
    if (!isClient) return "";
    if (!createdOn) return "";

    if (typeof createdOn === "object" && "seconds" in createdOn) {
      return new Date(createdOn.seconds * 1000).toLocaleString();
    }

    return new Date(createdOn).toLocaleString();
  };

  // skip rendering on server to prevent hydration errors
  if (!isClient) return null;

  return (
    <>
      {/* Modal for creating new todo */}
      {isPosting && (
        <Modal onClose={isNotPosting}>
          <CreateTodoCard onCancel={isNotPosting} newTodoCard={handleAddTodoCard} />
        </Modal>
      )}

      {/* Main content */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : todos.length > 0 ? (
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
