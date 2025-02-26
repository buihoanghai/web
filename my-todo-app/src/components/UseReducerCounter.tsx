import { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

export default function UserReducerCounter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}
