import React from "react";
import {useMessageStack} from "../../hooks/useMessageStack.ts";
import {AnimatePresence, motion} from "framer-motion";

const MessageStackDisplay: React.FC = () => {
	const messages = useMessageStack();
	return (
		<div className="fixed bottom-4 right-4 space-y-2">
			<AnimatePresence>
				{messages.map((msg) => (
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

export default MessageStackDisplay;
