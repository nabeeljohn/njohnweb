"use client";

import TodoCard from "./TodoCard";
import Modal from "./Modal";
import CreateTodoCard from "./CreateTodoCard";
import classes from "./TodoCardList.module.css";
import { useState, useEffect } from "react";
import { TodoCard as TodoCardType, subscribeTodos, addTodoCard } from "../../../firebase/nextUpServices";

export default function TodoCardList({
    isPosting,
    isNotPosting,
}: {
    isPosting: boolean;
    isNotPosting: () => void;
}) {
    const [todos, setTodos] = useState<TodoCardType[]>([]);
    const [isClient, setIsClient] = useState(false);
    const [loading, setLoading] = useState(true);

    // mark client-side rendering
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Real-time subscription with loading
    useEffect(() => {
        const unsubscribe = subscribeTodos((todosData) => {
            setTodos(todosData);
            setLoading(false); // stop showing Loading... when data arrives
        });

        return () => unsubscribe(); // cleanup listener
    }, []);

    // Add a new todo
    const handleAddTodoCard = async (newCard: { title: string; body: string }) => {
        try {
            await addTodoCard(newCard);
            // state updates automatically via onSnapshot
        } catch (error) {
            console.error("Error adding todo card:", error);
        }
    };

    // Format Firestore timestamp safely
    const formatDate = (createdOn: any) => {
        if (!isClient || !createdOn) return "Loading...";
        if (typeof createdOn === "object" && "seconds" in createdOn) {
            return new Date(createdOn.seconds * 1000).toLocaleString();
        }
        return new Date(createdOn).toLocaleString();
    };

    // Avoid rendering on server to prevent hydration errors
    if (!isClient) return null;

    return (
        <>
            {isPosting && (
                <Modal onClose={isNotPosting}>
                    <CreateTodoCard onCancel={isNotPosting} newTodoCard={handleAddTodoCard} />
                </Modal>
            )}

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