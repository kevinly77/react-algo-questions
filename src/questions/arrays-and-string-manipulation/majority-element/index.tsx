import React from "react";

export default function MajorityElementExample() {
	function majorityElement(nums: number[]): number {
		const map = new Map();

		let max = 0;
		let element = 0;
		for (let i = 0; i < nums.length; i++) {
			let currentElement = nums[i];
			if (map.has(currentElement)) {
				map.set(currentElement, map.get(currentElement) + 1);
			} else {
				map.set(currentElement, 1);
			}
		}

		for (const [key, val] of map.entries()) {
			max = Math.max(max, val);
			if (val === max) {
				element = key;
			}
		}
		return element;
	}
	return <div>{majorityElement([3, 2, 3])}</div>;
}
