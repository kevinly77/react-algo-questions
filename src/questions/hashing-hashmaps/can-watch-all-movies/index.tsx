import React from "react";

export default function CanWatchAllMoviesExample() {
	const movieLengths = [1, 2, 3, 4, 5];
	const freeTime = 3;
	function canWatchTwoMovies(movieLengths: number[], freeTime: number) {
		const moviesLengthsSeen = new Set();

		for (let i = 0; i < movieLengths.length; i++) {
			const complimentMovieLength = freeTime - movieLengths[i];

			if (moviesLengthsSeen.has(complimentMovieLength)) {
				return true;
			}
			moviesLengthsSeen.add(movieLengths[i]);
		}

		return false;
	}
	return <div>{canWatchTwoMovies(movieLengths, freeTime).toString()}</div>;
}
