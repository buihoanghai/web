import { useReducer, useState } from "react";
import { todoReducer } from "../reducers/todoReducer";

export default function UseReducerTodoApp() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [task, setTask] = useState("");

    return (
        <div>
            <h2>Todo List</h2>
            <input value={task} onChange={e => setTask(e.target.value)} />
            <button onClick={() => dispatch({ type: "ADD_TODO", payload: task })}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
            <span
                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            >
              {todo.text}
            </span>
                        <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
