import React from "react";

export default function PermutationPlaindroneExample() {
	const positive = "tacocat";
	const negative = "iovic";

	function isPermutationPlaindrone(string: string) {
		const set = new Set();
		for (let i = 0; i < string.length; i++) {
			console.log(`Current character: ${string.charAt(i)}`);
			if (set.has(string.charAt(i))) {
				console.log(`Seen character, deleting: ${string.charAt(i)}`);
				set.delete(string.charAt(i));
			} else {
				console.log(`Not seen character, adding: ${string.charAt(i)}`);
				set.add(string.charAt(i));
			}
		}
		if (set.size > 1) {
			return false;
		}

		return true;
	}
	return <div>{isPermutationPlaindrone(positive).toString()}</div>;
}
