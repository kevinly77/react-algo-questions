import React from "react";
import { Link, type LinkProps } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
interface CustomLinkProps extends LinkProps {
	active?: boolean;
}

const styles = stylex.create({
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
		width: "100%",
	},

	active: {
		color: "var(--color-primary-a10)",
	},
});
export default function CustomLink({
	children,
	active,
	...props
}: CustomLinkProps) {
	return (
		<Link {...stylex.props(styles.link, active && styles.active)} {...props}>
			{children}
		</Link>
	);
}
