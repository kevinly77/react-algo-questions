import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import * as stylex from "@stylexjs/stylex";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";
import { questions } from "./data/questions";
//TODO separate things into pages and sections

const styles = stylex.create({
	layout: {
		display: "grid",
		height: "100%",
		width: "100%",
		gridTemplateColumns: "300px 1fr",
		backgroundColor: "var(--color-surface-a20)",
		color: "white",
		overflow: "scroll",
	},
});
function App() {
	function Layout() {
		return (
			<div {...stylex.props(styles.layout)}>
				<Sidebar />
				<Outlet />
			</div>
		);
	}
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/questions">
					{questions.map((question) => (
						<Route
							key={question.name}
							path={question.path}
							element={question.element}
						/>
					))}
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
