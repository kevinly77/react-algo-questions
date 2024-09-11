import React from "react";

export default function FirstComeFirstServeExample() {
	const takeOutOrders = [1, 3, 5, 7, 9];
	const dineInOrders = [2, 4, 6, 8, 10];
	const servedOrders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	function isFirstComeFirstServe(
		takeOutOrders: number[],
		dineInOrders: number[],
		servedOrders: number[],
	) {
		let dineInIndex = 0;
		let takeOutIndex = 0;

		for (const order of servedOrders) {
			if (
				takeOutIndex < takeOutOrders.length &&
				order === takeOutOrders[takeOutIndex]
			) {
				takeOutIndex++;
			} else if (
				dineInIndex < dineInOrders.length &&
				order === dineInOrders[dineInIndex]
			) {
				dineInIndex++;
			} else {
				return false;
			}
		}

		if (
			takeOutIndex !== takeOutOrders.length ||
			dineInIndex !== dineInOrders.length
		) {
			return false;
		}

		return true;
	}
	return (
		<div>
			<h1>
				{isFirstComeFirstServe(
					takeOutOrders,
					dineInOrders,
					servedOrders,
				).toString()}
			</h1>
		</div>
	);
}
