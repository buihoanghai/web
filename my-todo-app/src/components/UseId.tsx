import { useId } from "react";

export default function Form() {
    const id = useId(); // Unique ID for this component instance

    return (
        <div>
            <label htmlFor={`${id}-name`}>Name:</label>
            <input id={`${id}-name`} type="text" placeholder="Enter your name" />

            <label htmlFor={`${id}-email`}>Email:</label>
            <input id={`${id}-email`} type="email" placeholder="Enter your email" />
        </div>
    );
}
