import React from "react";

export default function MergeSortedArrayExample() {
	const array1 = [3, 4, 6, 10, 11];
	const array2 = [1, 5, 8, 12, 14, 15];

	function mergeSortedArrays(array1: number[], array2: number[]) {
		const mergedArray: number[] = [];
		let mergedArrayIndex = 0;
		let array1Index = 0;
		let array2Index = 0;

		const isArray1Done = array1Index >= array1.length;
		const isArray2Done = array2Index >= array2.length;
		while (mergedArrayIndex < array1.length + array2.length) {
			if (
				!isArray1Done &&
				(array1[array1Index] < array2[array2Index] || isArray2Done)
			) {
				mergedArray[mergedArrayIndex] = array1[array1Index];
				array1Index++;
				mergedArrayIndex++;
			} else {
				mergedArray[mergedArrayIndex] = array2[array2Index];
				array2Index++;
				mergedArrayIndex++;
			}
		}
		return mergedArray;
	}
	return (
		<div style={{ height: "100%" }}>{mergeSortedArrays(array1, array2)}</div>
	);
}
