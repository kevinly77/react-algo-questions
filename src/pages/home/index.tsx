import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<Link to="/arrays-and-string-manipulation">
				Arrays and string manipulation
			</Link>
			<Link to="/greedy-algorithms">Greedy algorithms</Link>
			<Link to="/queues-and-stacks">Queues and stacks</Link>
		</div>
	);
}
