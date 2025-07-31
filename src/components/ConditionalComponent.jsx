
export default function ConditionalComponent() {
    let message;
    const display = false;

    if (display) {
        message = "The condition is true!";
    } else {
        message = "The condition is false!";
    }

    // Os Components devem ter apenas um return
    return message;
}