import FirstComeFirstServeExample from "../questions/arrays-and-string-manipulation/first-come-first-serve";
import MajorityElementExample from "../questions/arrays-and-string-manipulation/majority-element";
import MergeSortedArrayExample from "../questions/arrays-and-string-manipulation/merge-sorted-arrays";
import RemoveDuplicatesFromSortedArrayExample from "../questions/arrays-and-string-manipulation/remove-duplicates-from-sorted-array";
import ReverseStringInPlaceExamples from "../questions/arrays-and-string-manipulation/reverse-string-in-place";
import ReverseWordsExample from "../questions/arrays-and-string-manipulation/reverse-words";
import MaxPotentialProfitExample from "../questions/greedy-algorithms/max-potential-profit";
import ProductOfAllOtherNumbersExample from "../questions/greedy-algorithms/product-of-all-other-numbers";
import BracketValidatorExample from "../questions/queues-and-stacks/bracket-validator";
import ParenthesisMatcherExample from "../questions/queues-and-stacks/parenthesis-matcher";

export const tags = [
	"Arrays & string manupulation",
	"Greedy algorithms",
	"Queues & Stacks",
	"Sorting & Searching",
	"Leetcode",
];

export interface I_Question {
	name: string;
	path: string;
	tags: string[];
	element: JSX.Element;
}

export const questions: I_Question[] = [
	{
		name: "Merge sorted arrays",
		path: "/questions/merge-sorted-arrays",
		tags: ["Arrays & string manupulation", "Leetcode"],
		element: <MergeSortedArrayExample />,
	},
	{
		name: "Remove duplicates from sorted array",
		path: "/questions/remove-duplicates-from-sorted-array",
		tags: ["Arrays & string manupulation", "Leetcode"],
		element: <RemoveDuplicatesFromSortedArrayExample />,
	},
	{
		name: "Reverse string in place",
		path: "/questions/reverse-string-in-place",
		tags: ["Arrays & string manupulation", "Leetcode"],
		element: <ReverseStringInPlaceExamples />,
	},
	{
		name: "Reverse words",
		path: "/questions/reverse-words",
		tags: ["Arrays & string manupulation", "Leetcode"],
		element: <ReverseWordsExample />,
	},
	{
		name: "First come first serve",
		path: "/questions/first-come-first-serve",
		tags: ["Arrays & string manupulation", "Leetcode"],
		element: <FirstComeFirstServeExample />,
	},
	{
		name: "Majority element",
		path: "/questions/majority-element",
		tags: ["Arrays & string manupulation", "Leetcode"],
		element: <MajorityElementExample />,
	},
	{
		name: "Max potential profit",
		path: "/questions/max-potential-profit",
		tags: ["Greedy algorithms", "Leetcode"],
		element: <MaxPotentialProfitExample />,
	},
	{
		name: "Product of all other numbers",
		path: "/questions/product-of-all-other-numbers",
		tags: ["Greedy algorithms", "Leetcode"],
		element: <ProductOfAllOtherNumbersExample />,
	},
	{
		name: "Parenthesis matcher",
		path: "/questions/parenthesis-matcher",
		tags: ["Queues & Stacks", "Leetcode"],
		element: <ParenthesisMatcherExample />,
	},
	{
		name: "Bracket validator",
		path: "/questions/bracket-validator",
		tags: ["Queues & Stacks", "Leetcode"],
		element: <BracketValidatorExample />,
	},
];
