import { useRef, useImperativeHandle, forwardRef } from "react";
function CustomInputWithout() {
    return <input className="flex-1 p-2 border rounded-l-lg" ref={(el) => (window.inputRef = el)} type="text" />;
}
const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(), // Only expose focus method
    }));

    return <input className="flex-1 p-2 border rounded-l-lg" ref={inputRef} type="text" />;
});

export default function UseImperativeHandleCustomInput() {
    const inputRef = useRef<{ focus: () => void }>(null);

    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
            <CustomInputWithout/>
            <button onClick={() => window.inputRef?.focus()}>Focus Input Without useImperativeHandle</button>
        </div>
    );
}
