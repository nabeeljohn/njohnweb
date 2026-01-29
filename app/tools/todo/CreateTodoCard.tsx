import classes from "./CreateTodoCard.module.css";

export default function CreateTodoCard() {
    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="userName">Name:</label>
                <input type="text" id="userName" name="userName" /> 
            </div>
            <div>
                <label htmlFor="body">List Item:</label>    
                <input type="text" id="body" name="body" />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}