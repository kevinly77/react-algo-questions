import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ArraysAndStringManipulation from "./pages/arrays-and-string-manipulation";
import MaxPotentialProfitExample from "./questions/greedy-algorithms/max-potential-profit";
import ProductOfAllOtherNumbersExample from "./questions/greedy-algorithms/product-of-all-other-numbers";
import BracketValidatorExample from "./questions/queues-and-stacks/bracket-validator";
import GreedyAlgorithms from "./pages/greedy-algorithms";
import QueuesAndStacks from "./pages/queues-and-stacks";
import MergeSortedArrayExample from "./questions/arrays-and-string-manipulation/merge-sorted-arrays";
import TopScoresExample from "./questions/sorting-searching/top-scores";
import SortingAndSearching from "./pages/sorting-searching";
import FindRotationPointExample from "./questions/sorting-searching/find-rotation-point";


//TODO separate things into pages and sections
function App() {
	function Layout() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</div>
		);
	}
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/arrays-and-string-manipulation">
						<Route index element={<ArraysAndStringManipulation />} />
						<Route
							path="merge-sorted-arrays"
							element={<MergeSortedArrayExample />}
						/>
					</Route>
					<Route path="/greedy-algorithms">
						<Route index element={<GreedyAlgorithms />} />
						<Route
							path="max-potential-profit"
							element={<MaxPotentialProfitExample />}
						/>
						<Route
							path="product-of-all-other-numbers"
							element={<ProductOfAllOtherNumbersExample />}
						/>
					</Route>
					<Route path="/queues-and-stacks">
						<Route index element={<QueuesAndStacks />} />
						<Route
							path="bracket-validator"
							element={<BracketValidatorExample />}
						/>
						<Route
							path="parenthesis-matcher"
							element={<ParenthesisMatcherExample />}
						/>
					</Route>

					<Route path="/sorting-searching">
						<Route index element={<SortingAndSearching />} />
						<Route path="top-scores" element={<TopScoresExample />} />
						<Route
							path="find-rotation-point"
							element={<FindRotationPointExample />}
						/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
