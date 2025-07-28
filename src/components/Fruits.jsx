export default function Fruits() {
    // const fruits = ["Apple", "Banana", "Cherry"];
    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎" },
        { name: "Banana", price: 5, emoji: "🍌" },
        { name: "Cherry", price: 15, emoji: "🍒" }      
    ];

    return (
        <div>
            <ul>
            {fruits.map((fruit) => (
                <li key={fruit.name}>
                    {fruit.emoji} {fruit.name} - ${fruit.price}
                </li>
            ))}
            </ul>
        </div>
    );
}