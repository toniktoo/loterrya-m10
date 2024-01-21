import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
	return (
		<div>
			<h1>Page not found</h1>
			<NavLink to="/">Return to the main page</NavLink>
		</div>
	)
}