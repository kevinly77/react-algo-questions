import React, { useState } from "react";
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
		padding: "2rem",

		//alignItems: "center",
	},

	questionsWrapper: {
		display: "grid",
		marginTop: "2rem",
		gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
		gap: "1rem",
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},

	tagsWrapper: {
		display: "flex",
		gap: "0.5rem",
		marginTop: "0.5rem",
	},
});
export default function Home() {
	const [questionsCopy, setQuestionsCopy] = useState<I_Question[]>(questions);
	const [query, setQuery] = useState("");
	const filteredQuestions = questionsCopy.filter((question) => {
		return (
			question.name.toLowerCase().includes(query.toLowerCase()) ||
			question.tags.some((tag) =>
				tag.toLowerCase().includes(query.toLowerCase()),
			)
		);
	});
	function card(question: I_Question) {
		function handleTagClick(event: React.MouseEvent<HTMLParagraphElement>) {
			event.preventDefault();
			setQuery(event.currentTarget.textContent || "");
		}
		return (
			<Link to={question.path} {...stylex.props(commonStyles.card)}>
				<h3>{question.name}</h3>
				<div {...stylex.props(styles.tagsWrapper)}>
					{question.tags.map((tag) => (
						<p
							{...stylex.props(commonStyles.tag)}
							key={tag}
							onClick={(event) => handleTagClick(event)}
						>
							{tag}
						</p>
					))}
				</div>
			</Link>
		);
	}
	return (
		<div {...stylex.props(styles.wrapper)}>
			{/* <div>
					<h1>Categories</h1>
					<div {...stylex.props(styles.questionsWrapper)}>
						{algorithmCategories.map((category) => card(category))}
					</div>
				</div> */}
			<input value={query} onChange={(event) => setQuery(event.target.value)} />
			<div>
				<h1>Questions</h1>
				<div {...stylex.props(styles.questionsWrapper)}>
					{filteredQuestions.map((question) => card(question))}
				</div>
			</div>
		</div>
	);
}
