export default function ToDoCard(props: {userName: string, body: string}) {
    return (
        <div className="max-w-md mx-auto my-4 p-6 bg-gray-100 rounded-lg shadow-md text-black">
            <p>Hi, {props.userName}</p>
            <p>{props.body}</p>
        </div>    
    );
}
