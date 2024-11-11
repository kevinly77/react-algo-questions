import React from "react";
import { Link } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { algorithmCategories } from "../../data/question-categories";
import CustomLink from "../../components/link";
import { formatCategoryName } from "../../helpers/helpers";
import { commonStyles } from "../../styles/commons";
import { I_Question, questions } from "../../data/questions";

const styles = stylex.create({
	wrapper: {
		width: "100%",
		height: "100%",
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
	function card(category: I_Question) {
		return (
			<CustomLink to={category.path} {...stylex.props(commonStyles.card)}>
				<h3>{category.name}</h3>
			</CustomLink>
		);
	}
	return (
		<div {...stylex.props(styles.wrapper)}>
			<div {...stylex.props(styles.innerWrapper)}>
				{/* <div>
					<h1>Categories</h1>
					<div {...stylex.props(styles.categoriesWrapper)}>
						{algorithmCategories.map((category) => card(category))}
					</div>
				</div> */}

				<div>
					<h1>Questions</h1>
					<div {...stylex.props(styles.categoriesWrapper)}>
						{questions.map((question) => card(question))}
					</div>
				</div>
			</div>
		</div>
	);
}
