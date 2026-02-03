import { useState } from "react";
import classes from "./CreateTodoCard.module.css";

export default function CreateTodoCard({onCancel, newTodoCard}: { onCancel: () => void, newTodoCard: any}) {

    const [cardTitle, setCardTitle] = useState('AlexG');
    const [cardBody, setCardBody] = useState('Goto Honda');

    function cardTitleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCardTitle(e.target.value);
    }

    function cardBodyChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCardBody(e.target.value);
    }

    function submitTodoEntry(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const toDoPost = {
            title: cardTitle,
            body: cardBody,
            createdOn: new Date().toISOString()
        };
        newTodoCard(toDoPost);
        onCancel(); // Close the modal after submission
    }

    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={cardTitleChangeHandler} />
            </div>
            <div>
                <label htmlFor="body">List Item:</label>
                <input type="text" id="body" name="body" onChange={cardBodyChangeHandler} />
            </div>
            <p className={classes.actions}>
                <button type="submit" onClick={submitTodoEntry}>Add Item</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </p>
        </form>
    );
}