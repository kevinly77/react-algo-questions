import React from "react";

export default function ParenthesisMatcherExample() {
	function getClosingParenthesisIndex(
		string: string,
		openingParenthesisIndex: number,
	) {
		let openingParenthesisCount = 0;

		for (let i = openingParenthesisIndex + 1; i < string.length; i++) {
			console.log(openingParenthesisCount, string[i]);
			if (string[i] === "(") {
				openingParenthesisCount++;
			} else if (string[i] === ")") {
				if (openingParenthesisCount === 0) {
					console.log("Found closing parenthesis at index", i);
					return i;
				} else {
					openingParenthesisCount--;
				}
			}
		}

		throw new Error("No closing parenthesis found");
	}
	return (
		<div>
			<p>((example))</p>
			{getClosingParenthesisIndex("(((example)))", 0)}
		</div>
	);
}
