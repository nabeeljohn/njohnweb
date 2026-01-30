"use client";

import TodoCard from "./TodoCard";
import CreateTodoCard from "./CreateTodoCard";  
import classes from "./TodoCardList.module.css";

import { useState } from "react";

export default function TodoCardList(){
    const [cardTitle, setCardTitle] = useState('');
    const [cardBody, setCardBody] = useState('');

    function cardTitleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCardTitle(e.target.value);
    }

    function cardBodyChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCardBody(e.target.value);
    }
    
    return (
        <>
        <CreateTodoCard onCardTitleChange={cardTitleChangeHandler} onCardBodyChange={cardBodyChangeHandler} />
        <ul className={classes.todoCardList}>
            <TodoCard cardTitle={cardTitle} cardBody={cardBody} />
            <TodoCard cardTitle="Bob" cardBody="Need to bring Honda to the dealer"/>
            <TodoCard cardTitle="Charlie" cardBody="Need to Nissan car to the dealer"/>
            <TodoCard cardTitle="David" cardBody="Need to Chevrolet car to the dealer"/>
        </ul>
        </>
    );
}