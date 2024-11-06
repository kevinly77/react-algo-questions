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
});
