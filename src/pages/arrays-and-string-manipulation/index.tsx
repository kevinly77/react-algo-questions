import React from "react";
import { Link } from "react-router-dom";
import { arraysAndStringManipulationQuestions } from "../../data/question-categories";
import { commonStyles } from "../../styles/commons";
import * as stylex from "@stylexjs/stylex";
export default function ArraysAndStringManipulation() {
	return (
		<div>
			{arraysAndStringManipulationQuestions.map((question) => (
				<Link
					to={question.path}
					key={question.name}
					{...stylex.props(commonStyles.card)}
				>
					{question.name}
				</Link>
			))}
		</div>
	);
}
