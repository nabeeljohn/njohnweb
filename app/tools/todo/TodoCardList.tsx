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

    function addTodoCardHandler(newTodoCard: Card) {
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
                        <TodoCard key={todoCard.title} cardTitle={todoCard.title} cardBody={todoCard.body} cardCreatedOn={todoCard.createdOn}/>
                    ))}
                </ul>
            )}

            {
            todoCards.length === 0 && <p style={{textAlign:'center'}}>No To-Do Items. Please add one.</p>
            }

        </>
    );
}