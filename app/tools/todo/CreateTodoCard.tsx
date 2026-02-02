import classes from "./CreateTodoCard.module.css";

export default function CreateTodoCard({onCardTitleChange, onCardBodyChange, onCancel}:
    {onCardTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
     onCardBodyChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
     onCancel: () => void}) {
    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={onCardTitleChange} /> 
            </div>
            <div>
                <label htmlFor="body">List Item:</label>    
                <input type="text" id="body" name="body" onChange={onCardBodyChange} />
            </div>
            <p className={classes.actions}>
                <button type="submit">Add Item</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </p>
        </form>
    );
}