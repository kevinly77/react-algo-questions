import React from "react";

export default function TopScoresExample() {
	function sortScores(scores: number[], highestPossibleScore: number) {
		let scoreCounts = new Array(highestPossibleScore + 1).fill(0);

		for (const score of scores) {
			scoreCounts[score]++;
		}

		let sortedScores = [];
		for (let i = highestPossibleScore; i >= 0; i--) {
			while (scoreCounts[i] > 0) {
				sortedScores.push(i);
				scoreCounts[i]--;
			}
		}
		console.log(sortedScores);
		return sortedScores;
	}
	return <div>{sortScores([37, 89, 41, 65, 91, 53], 100)}</div>;
}
