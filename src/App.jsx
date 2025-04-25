import { useEffect, useState } from "react";
import TodoInput from "./components/Input";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4 flex justify-center items-start">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-orange-700">🧭 ToDo App</h1>
          <p className="text-gray-500 text-sm mt-1">
            {time.toLocaleTimeString()}
          </p>
        </div>

        <TodoInput onAdd={addTodo} />

        <div className="mt-6 space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400">No todos yet. Add one!</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleDone(todo.id)}
                onRemove={() => removeTodo(todo.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
