import React from "react";

export default function RemoveDuplicatesFromSortedArrayExample() {
	function removeDuplicates(nums: number[]): number {
		let slow = 0;
		for (let fast = 1; fast < nums.length; fast++) {
			if (nums[slow] !== nums[fast]) {
				slow++;
				nums[slow] = nums[fast];
			}
		}

		return slow + 1;
	}

	return <div>{removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])}</div>;
}
