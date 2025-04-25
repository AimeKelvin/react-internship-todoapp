export default function TodoItem({ todo, onToggle, onRemove }) {
    return (
      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
        <div
          className={`flex-1 cursor-pointer ${todo.done ? 'line-through text-red-500' : ''}`}
          onClick={onToggle}
        >
          {todo.text}
        </div>
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700"
          title="Remove"
        >
          &times;
        </button>
      </div>
    );
  }
  