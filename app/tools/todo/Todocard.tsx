const names = ['Alice', 'Bob'];

export default function ToDoCard() {
    const chosenName = Math.random() < 0.5 ? names[0] : names[1];

    return (
        <div className="max-w-md mx-auto my-4 p-6 bg-gray-100 rounded-lg shadow-md text-black">
            <p>Hi, {chosenName}</p>
            <p>Your Todo list app is under construction. Please check back later.</p>
        </div>    
    );
}
