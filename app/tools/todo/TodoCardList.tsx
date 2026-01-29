import TodoCard from "./TodoCard";
import classes from "./TodoCardList.module.css";

export default function TodoCardList(){
    return (
        <ul className={classes.todoCardList}>
            <TodoCard userName="AliceX" body="Need to bring Toyota to the dealer"/>
            <TodoCard userName="Bob" body="Need to bring Honda to the dealer"/>
            <TodoCard userName="Charlie" body="Need to Nissan car to the dealer"/>
            <TodoCard userName="David" body="Need to Chevrolet car to the dealer"/>
        </ul>
    );
}