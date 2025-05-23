import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
      <input
        className="flex-1 border border-orange-300 p-2 rounded"
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-orange-500 text-white px-4 rounded hover:bg-orange-800 transition">
        Add
      </button>
    </form>
  );
}
