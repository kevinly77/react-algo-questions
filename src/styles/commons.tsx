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
		minWidth: "15rem",
		minHeight: "10rem",

		textDecoration: "none",
		color: "inherit",
		":hover": {
			border: "1px solid var(--color-primary-a10)",
			transition: "var(--transition-speed)",
		},
	},

	tag: {
		padding: "0.25rem 0.5rem",
		borderRadius: "var(--border-radius)",
		backgroundColor: "var(--color-surface-a30)",
		width: "fit-content",
		transition: "var(--transition-speed)",
		":hover": {
			backgroundColor: "var(--color-surface-a40)",
		},
	},
});
