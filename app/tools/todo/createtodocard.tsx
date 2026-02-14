import { useState } from "react";
import classes from "./createtodocard.module.css";
import { buttonPrimary } from "../../../appcomponents/styles";

export default function CreateTodoCard({ onCancel, newTodoCard }: { onCancel: () => void, newTodoCard: any }) {

    const [cardTitle, setCardTitle] = useState('');
    const [cardBody, setCardBody] = useState('');

    function cardTitleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCardTitle(e.target.value);
    }

    function cardBodyChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
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
        <>
            <form className={classes.form}>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Add Todo</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Enter a title and description for your new todo item.
                </p>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" onChange={cardTitleChangeHandler} />
                </div>
                <div>
                    <label htmlFor="body">Description:</label>
                    <textarea id="body" name="body" rows={4} onChange={cardBodyChangeHandler} value={cardBody} />
                </div>
                <p className={classes.actions}>
                    <button type="submit" onClick={submitTodoEntry} className={buttonPrimary}>Add Item</button>
                    <button type="button" onClick={onCancel} className={buttonPrimary}>Cancel</button>
                </p>
            </form>
        </>
    );
}