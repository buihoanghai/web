import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../features/home/Home";
import ReactHooksRoutes from "./ReactHooks";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/react-hooks/*" element={<ReactHooksRoutes />} />
		</Routes>
	);
};

export default AppRoutes;
