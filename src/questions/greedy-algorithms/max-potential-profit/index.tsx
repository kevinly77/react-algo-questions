import React from "react";

export default function MaxPotentialProfitExample() {
	const stockPrices = [10, 7, 5, 8, 11, 9];
	function getMaxProfit(prices: number[]) {
		let minPrice = prices[0];
		let maxProfit = 0;
		for (let i = 1; i < prices.length; i++) {
			const potentialProfit = prices[i] - minPrice;
			maxProfit = Math.max(maxProfit, potentialProfit);
			minPrice = Math.min(minPrice, prices[i]);
		}

		return maxProfit;
	}
	return <div>{getMaxProfit(stockPrices).toString()}</div>;
}
