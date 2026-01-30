"use client";

import {useState} from "react";
import classes from "./CreateTodoCard.module.css";

export default function CreateTodoCard() {
    const [title, setTitle] = useState('');

    function titleChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={titleChangeHandler} /> 
            </div>
            <div>{title}</div>
            <div>
                <label htmlFor="body">List Item:</label>    
                <input type="text" id="body" name="body" />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}