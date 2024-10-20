import React from "react";

export default function FindRotationPointExample() {
	const words = [
		"ptolemaic",
		"retrograde",
		"supplant",
		"undulate",
		"xenoepist",
		"asymptote",
		"babka",
		"banoffee",
		"engender",
		"karpatka",
		"othellolagkage",
	];

	function findRotationPoint(words: string[]): number {
		const firstWord = words[0];

		let floorIndex = 0;
		let ceilingIndex = words.length - 1;

		while (floorIndex < ceilingIndex) {
			let guessIndex = floorIndex + Math.floor((ceilingIndex - floorIndex) / 2);

			if (words[guessIndex].localeCompare(firstWord) >= 0) {
				floorIndex = guessIndex;
			} else {
				ceilingIndex = guessIndex;
			}

			if (floorIndex + 1 === ceilingIndex) {
				break;
			}
		}
		return ceilingIndex;
	}
	return <div>{findRotationPoint(words).toString()}</div>;
}
