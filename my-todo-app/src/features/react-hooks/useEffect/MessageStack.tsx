import { useMessageStack } from "../../../components/MessageStackProvider.tsx";
import { motion, AnimatePresence } from "framer-motion";

const MessageStack = () => {
	const { activeMessages } = useMessageStack();

	return (
		<div className="fixed top-5 right-5 z-[9999] flex flex-col space-y-2 pointer-events-none">
			<AnimatePresence>
				{activeMessages.map((msg) => (
					<motion.div
						key={msg.id}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.5 }}
						className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg"
					>
						{msg.text}
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default MessageStack;
