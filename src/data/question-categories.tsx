export const algorithmCategories = [
	"arrays-and-string-manipulation",
	"greedy-algorithms",
	"queues-and-stacks",
	"sorting-searching",
];

export interface I_ArraysAndStringManipulationQuestion {
	name: string;
	path: string;

	//TODO more card information
}
export const arraysAndStringManipulationQuestions: I_ArraysAndStringManipulationQuestion[] =
	[
		{
			name: "Merge sorted arrays",
			path: "/arrays-and-string-manipulation/merge-sorted-arrays",
		},
		{
			name: "Remove duplicates from sorted array",
			path: "/arrays-and-string-manipulation/remove-duplicates-from-sorted-array",
		},
		{
			name: "Reverse string in place",
			path: "/arrays-and-string-manipulation/reverse-string-in-place",
		},
		{
			name: "Reverse words",
			path: "/arrays-and-string-manipulation/reverse-words",
		},
		{
			name: "First come first serve",
			path: "/arrays-and-string-manipulation/first-come-first-serve",
		},
		{
			name: "Majority element",
			path: "/arrays-and-string-manipulation/majority-element",
		},
	];
