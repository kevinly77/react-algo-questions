import React from "react";

export default function ProductOfAllOtherNumbersExample() {
	function getProdutsOfAllOtherNumbers(numbers: number[]) {
		let merged = [];
		let productSoFar = 1;

		for (let i = 0; i < numbers.length; i++) {
			merged[i] = productSoFar;
			productSoFar *= numbers[i];
		}

		productSoFar = 1;
		for (let i = numbers.length - 1; i >= 0; i--) {
			merged[i] *= productSoFar;
			productSoFar *= numbers[i];
		}
		return merged;
	}

	return <div>{getProdutsOfAllOtherNumbers([1, 7, 3, 4]).toString()}</div>;
}
