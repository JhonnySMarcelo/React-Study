import Fruit from './Fruit';

export default function Fruits() {
    // const fruits = ["Apple", "Banana", "Cherry"];
    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎", soldout: false },
        { name: "Banana", price: 5, emoji: "🍌", soldout: false },
        { name: "Cherry", price: 15, emoji: "🍒", soldout: true }      
    ];

    return (
        <div>
            <ul>
            {fruits.map((fruit) => (
                <Fruit 
                    key={fruit.name} 
                    name={fruit.name} 
                    price={fruit.price} 
                    emoji={fruit.emoji} 
                    soldout={fruit.soldout}
                />
            ))}
            </ul>
        </div>
    );
}