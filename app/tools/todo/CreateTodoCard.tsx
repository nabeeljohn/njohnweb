import classes from "./CreateTodoCard.module.css";

export default function CreateTodoCard(props : {onCardTitleChange : (e: React.ChangeEvent<HTMLInputElement>) => void, onCardBodyChange : (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={props.onCardTitleChange} /> 
            </div>
            <div>
                <label htmlFor="body">List Item:</label>    
                <input type="text" id="body" name="body" onChange={props.onCardBodyChange} />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}