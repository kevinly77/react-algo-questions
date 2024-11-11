import * as stylex from "@stylexjs/stylex";
export const commonStyles = stylex.create({
	link: {
		textDecoration: "none",
		color: "inherit",

		":hover": {
			opacity: "var(--hover-opacity)",
			transition: "var(--transition-speed)",
		},

		":active": {
			color: "var(--color-primary-a10)",
		},
	},

	card: {
		padding: "1rem",
		borderRadius: "var(--border-radius)",
		border: "1px solid transparent",
		backgroundColor: "var(--color-surface-a10)",
		width: "15rem",
		height: "10rem",

		textDecoration: "none",
		color: "inherit",
		":hover": {
			border: "1px solid var(--color-primary-a10)",
			transition: "var(--transition-speed)",
		},
	},
});
