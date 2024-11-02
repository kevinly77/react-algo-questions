import React from "react";
import { Link } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
const algorithCategories = [
	"arrays-and-string-manipulation",
	"greedy-algorithms",
	"queues-and-stacks",
	"sorting-searching",
];

const styles = stylex.create({
	categoryCard: {
		padding: "1rem",
		borderRadius: "var(--border-radius)",
		border: "1px solid black",
		width: "300px",
		height: "300px",
		backgroundColor: "var(--color-surface-a10)",
	},

	link: {
		textDecoration: "none",
		color: "inherit",
	},
});
export default function Home() {
	function categoryCard(category: string) {
		return (
			<Link
				to={`/${category}`}
				{...stylex.props(styles.link, styles.categoryCard)}
			>
				<h3>{category}</h3>
			</Link>
		);
	}
	return (
		<div>{algorithCategories.map((category) => categoryCard(category))}</div>
	);
}
