import { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter your name"
          value={name}
        />
      </form>
    </div>
  );
}
