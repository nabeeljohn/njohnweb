"use client";

import TodoCard from "./TodoCard";
import Modal from "./Modal";
import CreateTodoCard from "./CreateTodoCard";
import classes from "./TodoCardList.module.css";

export default function TodoCardList({isPosting, isNotPosting}:
    {isPosting: boolean,
     isNotPosting: () => void}) {
    return (
        <>
            {isPosting && <Modal onClose={isNotPosting}>
                <CreateTodoCard onCancel={isNotPosting} />
            </Modal>}
            <ul className={classes.todoCardList}>
                <TodoCard cardTitle="Bob" cardBody="Need to bring Honda to the dealer" />
                <TodoCard cardTitle="Charlie" cardBody="Need to Nissan car to the dealer" />
                <TodoCard cardTitle="David" cardBody="Need to Chevrolet car to the dealer" />
            </ul>
        </>
    );
}