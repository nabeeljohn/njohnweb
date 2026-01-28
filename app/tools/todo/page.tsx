
import ToDoCard from "./Todocard";

export default function Todo() {
    return (
        <>
            <ToDoCard userName="Alice" body="Need to bring Toyota to the dealer"/>
            <ToDoCard userName="Bob" body="Need to bring Honda to the dealer"/>
            <ToDoCard userName="Charlie" body="Need to Nissan car to the dealer"/>
            <ToDoCard userName="David" body="Need to Chevrolet car to the dealer"/>
        </>
    );
}
