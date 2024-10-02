import React from "react";

export default function BracketValidatorExample() {
	function isValid(s: string): boolean {
		let stack: string[] = [];
		for (let i = 0; i < s.length; i++) {
			let currentChar = s.charAt(i);
			if (currentChar === "(") {
				stack.push(")");
			} else if (currentChar === "[") {
				stack.push("]");
			} else if (currentChar === "{") {
				stack.push("}");
			} else if (stack.length < 1 || stack.pop() !== currentChar) {
				return false;
			}
		}
		return stack.length < 1;
	}

	return <div>{isValid("([{}])").toString()}</div>;
}
