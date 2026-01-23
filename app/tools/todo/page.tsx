const names = ['Alice', 'Bob'];

export default function Todo() {
    const chosenName = Math.random() < 0.5 ? names[0] : names[1];

    return (
        <div>
            <p>Hi, {chosenName}</p>
            <p>Your Todo list app is under construction. Please check back later.</p>
        </div>    
    );
}
