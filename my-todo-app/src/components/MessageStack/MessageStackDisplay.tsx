import React from "react";
import {useMessageStack} from "../../hooks/useMessageStack.ts";

const MessageStackDisplay: React.FC = () => {
	const messages = useMessageStack();
	return (
		<div className="fixed bottom-4 right-4 space-y-2">
			{messages.map((msg) => (
				<div
					key={msg.id}
					className="bg-gray-800 text-white px-4 py-2 rounded shadow-lg cursor-pointer"
					// onClick={() => removeMessage(msg.id)}
				>
					{msg.text}
				</div>
			))}
		</div>
	);
};

export default MessageStackDisplay;
