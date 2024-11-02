export function printCharacterArray(array: string[]) {
	return array.join("");
}

export function formatCategoryName(category: string) {
	const splitName = category.split("-").join(" ");
	return splitName.charAt(0).toUpperCase() + splitName.slice(1);
}
