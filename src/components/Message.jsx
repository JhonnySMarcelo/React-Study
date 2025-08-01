export default function Message() {
    function handleClick() {
        alert("Hello, this is a message!");
    }

    return (
        <div>
            <button onClick={handleClick}>Click here to get a Message</button>
        </div>
    );
}