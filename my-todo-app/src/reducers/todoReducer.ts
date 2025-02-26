// src/reducers/todoReducer.ts

import {Todo} from "../types/Todo";

// Action Types
export type TodoAction =
    | { type: "ADD_TODO"; payload: string }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "DELETE_TODO"; payload: number };

// Reducer Function
export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "ADD_TODO": {
            if (!action.payload.trim()) return state; // Ensure valid task
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false,
            };
            return [...state, newTodo];
        }

        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            );

        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state;
    }
};