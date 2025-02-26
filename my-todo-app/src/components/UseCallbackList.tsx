import { useState, useCallback, memo } from "react";

// Memoized row component (only re-renders if props change)
const Row = memo(({ item, onEdit }: { item: string; onEdit: (id: string) => void }) => {
    console.log(`🔄 Re-rendering row: ${item}`);
    return (
        <div className="flex justify-between p-2 border-b">
            <span>{item}</span>
            <button onClick={() => onEdit(item)} className="bg-blue-500 text-white px-2 py-1 rounded">
                Edit
            </button>
        </div>
    );
});

export default function UseCallbackList() {
    const [items] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
    const [selected, setSelected] = useState<string | null>(null);

    // 🛑 Without useCallback: new function created on every render → unnecessary re-renders!
    // ✅ With useCallback: function reference stays the same → prevents unnecessary re-renders
    const handleEdit = useCallback((id: string) => {
        console.log("Editing:", id);
        setSelected(id);
    }, []);

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold mb-4">Large List Example</h1>
            <div className="overflow-y-auto h-64 border rounded">
                {items.map((item) => (
                    <Row key={item} item={item} onEdit={handleEdit} />
                ))}
            </div>
            {selected && <p className="mt-2 text-blue-500">Editing: {selected}</p>}
        </div>
    );
}
