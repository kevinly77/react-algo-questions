import React from "react";

export default function ReverseStringInPlaceExamples() {
	//TODO write tests instead
	const message = "Hello world".split("");

	function reverseStringInPlace(message: string[]) {
		let messageCopy = message;
		let leftIndex = 0;
		let rightIndex = message.length - 1;
		while (leftIndex < rightIndex) {
			[messageCopy[leftIndex], messageCopy[rightIndex]] = [
				messageCopy[rightIndex],
				messageCopy[leftIndex],
			];
			leftIndex++;
			rightIndex--;
		}

		return messageCopy;
	}

	return (
		<div>
			<h2>Input: {message.toString()}</h2>
			<h2>Outout: {reverseStringInPlace(message).toString()}</h2>
		</div>
	);
}
