"use client";

import TodoCard from "./TodoCard";
import Modal from "./Modal";
import CreateTodoCard from "./CreateTodoCard";
import classes from "./TodoCardList.module.css";
import { useState } from "react";

export default function TodoCardList({ isPosting, isNotPosting, newTodoCard }:
    {
        isPosting: boolean,
        isNotPosting: () => void,
        newTodoCard?: any
    }) {

    type Card = {
        title: string;
        body: string;
        createdOn: string;
    };

    const [todoCards, setTodoCards] = useState<Card[]>([]);

    async function addTodoCardHandler(newTodoCard: Card) {
        const firestoreBody = {
            fields: {
                title: { stringValue: newTodoCard.title },
                body: { stringValue: newTodoCard.body },
                createdOn: { stringValue: newTodoCard.createdOn.toString() }
            }
        };

        const res = await fetch(
            "https://firestore.googleapis.com/v1/projects/nextupdata-8d635/databases/(default)/documents/ToDoCardsNJohn/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(firestoreBody)
            }
        );

        const data = await res.json();

        console.log("STATUS:", res.status);
        console.log("RESPONSE:", data);


        setTodoCards((prevCards) => [...prevCards, newTodoCard]);
    }

    return (
        <>
            {isPosting && <Modal onClose={isNotPosting}>
                <CreateTodoCard onCancel={isNotPosting} newTodoCard={addTodoCardHandler} />
            </Modal>}
            {todoCards.length > 0 && (
                <ul className={classes.todoCardList}>
                    {todoCards.map((todoCard) => (
                        <TodoCard
                            key={todoCard.title}
                            number={todoCards.indexOf(todoCard) + 1}
                            cardTitle={todoCard.title}
                            cardBody={todoCard.body}
                            cardCreatedOn={todoCard.createdOn}
                        />
                    ))}
                </ul>
            )}

            {
                todoCards.length === 0 && <p style={{ textAlign: 'center' }}>No To-Do Items. Please add one.</p>
            }

        </>
    );
}