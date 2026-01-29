import classes from "./TodoCard.module.css";

export default function TodoCard(props: {userName: string, body: string}) {
    return (
        <div className="max-w-md mx-auto my-4 p-6 bg-gray-100 rounded-lg shadow-md text-black">
            <p className={classes.username}>{props.userName}</p>
            <p>{props.body}</p>
        </div>    
    );
}
