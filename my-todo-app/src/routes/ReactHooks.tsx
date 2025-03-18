import React from "react";
import { Routes, Route } from "react-router-dom";
import UseState from "../features/react-hooks/UseState";
import UseEffect from "../features/react-hooks/UseEffect";
import UseContext from "../features/react-hooks/UseContext";

const ReactHooksRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="use-state" element={<UseState />} />
			<Route path="use-effect" element={<UseEffect />} />
			<Route path="use-context" element={<UseContext />} />
		</Routes>
	);
};

export default ReactHooksRoutes;
