"use client";

import TodoCard from "./TodoCard";
import Modal from "./Modal";
import CreateTodoCard from "./CreateTodoCard";
import classes from "./TodoCardList.module.css";

import { useState } from "react";

export default function TodoCardList() {
    const [modalVisible, setModalVisible] = useState(true);
    const [cardTitle, setCardTitle] = useState('AlexG');
    const [cardBody, setCardBody] = useState('Goto Honda');

    function hideModalHandler() {
        setModalVisible(false);
    }

    function cardTitleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCardTitle(e.target.value);
    }

    function cardBodyChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCardBody(e.target.value);
    }

    return (
        <>
        <button onClick={() => setModalVisible(true)}>Add Todo Item</button>
        
            {modalVisible && <Modal onClose={hideModalHandler}>
                <CreateTodoCard 
                    onCardTitleChange={cardTitleChangeHandler}
                    onCardBodyChange={cardBodyChangeHandler} />
            </Modal>}
            <ul className={classes.todoCardList}>
                <TodoCard cardTitle={cardTitle} cardBody={cardBody} />
                <TodoCard cardTitle="Bob" cardBody="Need to bring Honda to the dealer" />
                <TodoCard cardTitle="Charlie" cardBody="Need to Nissan car to the dealer" />
                <TodoCard cardTitle="David" cardBody="Need to Chevrolet car to the dealer" />
            </ul>
        </>
    );
}