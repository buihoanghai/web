import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import NoDependency from "./NoDependency";
import EmptyDependency from "./EmptyDependency";
import WithDependency from "./WithDependency";
import { JSX } from "react/jsx-runtime";

// Unified configuration for example data and components
const exampleConfig: Record<string, { data: string; component: JSX.Element }> = {
    "no-dependency": {
        data: "useEffect with No Dependency",
        component: <NoDependency />,
    },
    "empty-dependency": {
        data: "useEffect with Empty Dependency",
        component: <EmptyDependency />,
    },
    "with-dependency": {
        data: "useEffect with With Dependency",
        component: <WithDependency />,
    },
    // Add more example types and their corresponding data and components here
};

const ExamplePanel = () => {
    const { exampleType } = useParams();
    const navigate = useNavigate();
    const [isClosing, setIsClosing] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const [exampleData, setExampleData] = useState<string | null>(null);
    const [exampleComponent, setExampleComponent] = useState<JSX.Element | null>(null);

    const isOpen = Boolean(exampleType) && !isClosing;

    // 🔹 Fetch data and component based on exampleType
    useEffect(() => {
        if (exampleType) {
            // Retrieve data and component from the unified configuration
            const config = exampleConfig[exampleType];
            if (config) {
                setExampleData(config.data);
                setExampleComponent(config.component);
            } else {
                setExampleData("No data available for this example type.");
                setExampleComponent(null);
            }
        }
    }, [exampleType]);

    // 🔹 Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                closePanel();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // 🔹 Close panel smoothly
    const closePanel = () => {
        setIsClosing(true);
        setTimeout(() => {
            navigate("..", { relative: "path" }); // Change URL after animation
            setIsClosing(false);
        }, 300); // ⏳ Delay navigation (same as animation duration)
    };

    return (
        <>
            {/* 🔹 Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 bg-black cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>

            {/* 🔹 Example Panel (Delayed Exit) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="panel"
                        ref={panelRef}
                        className="fixed right-0 top-0 w-full max-w-2xl h-full bg-white shadow-lg p-5 overflow-y-auto z-50"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }} // ✅ Smooth exit before unmounting
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        {/* 🔥 Close Button */}
                        <button
                            onClick={closePanel}
                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                            aria-label="Close panel"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>

                        <h2 className="text-xl font-bold mb-4">{exampleData}</h2>
                        {/* Render the component based on exampleType */}
                        {exampleComponent}
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default ExamplePanel;