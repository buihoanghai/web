import React from "react";

interface CodeSnippetProps {
	code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
	return (
		<pre className="bg-gray-900 text-green-300 p-4 rounded mt-4 overflow-x-auto">
      <code>{code}</code>
    </pre>
	);
};

export default CodeSnippet;
