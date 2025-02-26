// src/components/TodoApp.tsx
import { useReducer, useRef, useState, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";

export default function TodoApp() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Load todos from localStorage (lazy initialization)
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [task, setTask] = useState("");

    useEffect(() => {
        inputRef.current?.focus(); // Auto-focus input on mount
    }, []);

    // Persist todos to localStorage whenever `todos` changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (): void => {
        dispatch({ type: "ADD_TODO", payload: task });
        setTask(""); // Clear task after adding
    };

    const handleToggleTodo = (id: number): void => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const handleDeleteTodo = (id: number): void => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
            <div className="flex mb-4">
                <input
                    ref={inputRef}
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                    className="flex-1 p-2 border rounded-l-lg"
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                    Add
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center mb-2 p-2 border rounded"
                    >
            <span
                className={
                    todo.completed
                        ? "line-through text-gray-500 cursor-pointer"
                        : "cursor-pointer"
                }
                onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
                        <button onClick={() => handleDeleteTodo(todo.id)} className="text-red-500">
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}