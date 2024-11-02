import React from "react";
import { Link } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { algorithmCategories } from "../../question-categories";
import CustomLink from "../../components/link";
import { formatCategoryName } from "../../helpers/helpers";

const styles = stylex.create({
	wrapper: {
		width: "100%",
		//backgroundColor: "pink",
		display: "flex",
		justifyContent: "center",
		padding: "1rem",
		//alignItems: "center",
	},

	innerWrapper: {
		maxWidth: "1366px",
		width: "100%",
		//backgroundColor: "blue",
	},

	categoryCard: {
		padding: "1rem",
		borderRadius: "var(--border-radius)",
		border: "1px solid transparent",
		backgroundColor: "var(--color-surface-a10)",
		width: "15rem",
		height: "10rem",

		textDecoration: "none",
		color: "inherit",
		":hover": {
			border: "1px solid var(--color-primary-a10)",
			transition: "var(--transition-speed)",
		},
	},

	categoriesWrapper: {
		display: "flex",
		gap: "1rem",
		flexWrap: "wrap",
		marginTop: "2rem",
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},
});
export default function Home() {
	function categoryCard(category: string) {
		return (
			<CustomLink to={`/${category}`} {...stylex.props(styles.categoryCard)}>
				<h3>{formatCategoryName(category)}</h3>
			</CustomLink>
		);
	}
	return (
		<div {...stylex.props(styles.wrapper)}>
			<div {...stylex.props(styles.innerWrapper)}>
				<h1>Categories</h1>
				<div {...stylex.props(styles.categoriesWrapper)}>
					{algorithmCategories.map((category) => categoryCard(category))}
				</div>
			</div>
		</div>
	);
}
