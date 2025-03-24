import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarItem {
	title: string;
	path?: string;
	children?: SidebarItem[];
	defaultExpanded?: boolean; // Optional: Allow default expanded state
}

const sidebarMenu: SidebarItem[] = [
	{ title: "Home", path: "/" },
	{
		title: "React Hooks",
		defaultExpanded: true, // Expand by default
		children: [
			{ title: "useState", path: "/react-hooks/use-state" },
			{ title: "useEffect", path: "/react-hooks/use-effect" },
			{ title: "useContext", path: "/react-hooks/use-context" },
			{ title: "useCallback", path: "/react-hooks/use-callback" },
		],
	},
	// {
	// 	title: "Performance",
	// 	defaultExpanded: false, // Collapsed by default
	// 	children: [
	// 		{ title: "useMemo", path: "/performance/use-memo" },
	// 		{ title: "useCallback", path: "/performance/use-callback" },
	// 	],
	// },
];

const Sidebar: React.FC = () => {
	const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>(
		Object.fromEntries(sidebarMenu.map((item) => [item.title, item.defaultExpanded ?? false]))
	);

	const toggleMenu = (title: string) => {
		setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
	};

	return (
		<nav className="w-64 h-screen bg-gray-800 text-white p-4">
			<ul className="space-y-4">
				{sidebarMenu.map((item) => (
					<li key={item.title}>
						{item.path ? (
							<Link to={item.path} className="block p-2 rounded hover:bg-gray-700">
								{item.title}
							</Link>
						) : (
							<div>
								<button
									className="block w-full text-left p-2 rounded hover:bg-gray-700 flex justify-between"
									onClick={() => toggleMenu(item.title)}
								>
									{item.title}
									<span>{openMenus[item.title] ? "▲" : "▼"}</span>
								</button>
								{item.children && openMenus[item.title] && (
									<ul className="ml-4 space-y-2">
										{item.children.map((child) => (
											<li key={child.title}>
												<Link to={child.path!} className="block p-2 rounded hover:bg-gray-600">
													{child.title}
												</Link>
											</li>
										))}
									</ul>
								)}
							</div>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Sidebar;
