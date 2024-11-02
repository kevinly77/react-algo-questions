import React, { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";
import { algorithmCategories } from "../../question-categories";
import { commonStyles } from "../../styles/commons";
import CustomLink from "../link";
import { formatCategoryName } from "../../helpers/helpers";
const styles = stylex.create({
	sidebar: {
		backgroundColor: "var(--color-surface-a10)",
		padding: "1rem",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		gap: "1rem",
	},

	active: {
		color: "var(--color-primary-a10)",
	},
});
export default function Sidebar() {
	const [activeUrl, setActiveUrl] = useState("/");

	return (
		<div {...stylex.props(styles.sidebar)}>
			<CustomLink
				to={"/"}
				active={activeUrl === "/"}
				onClick={() => setActiveUrl("/")}
			>
				<h4>Home</h4>
			</CustomLink>
			{algorithmCategories.map((category) => (
				<CustomLink
					to={`/${category}`}
					key={category}
					active={activeUrl === `/${category}`}
					onClick={() => setActiveUrl(`/${category}`)}
				>
					<h4>{formatCategoryName(category)}</h4>
				</CustomLink>
			))}
		</div>
	);
}
