import "../styles/App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CreateNote from "../components/CreateNote";
import CreateUser from "../components/CreateUser";
import Navigation from "../components/Navigation";
import NoteList from "../components/NoteList";



function Router() {
	/*const router = createBrowserRouter([
		{
			path: "/",
			element: <NoteList />
		},
		{
			path: "/create",
			element: <CreateNote />
		},
		{
			path: "/edit/:id",
			element: <CreateNote />
		},
		{
			path: "/user",
			element: <CreateUser />
		}
	]);

	return <RouterProvider router={router} />;*/

	/*	const router = [{
		<Route path= "/" element: {<NoteList />} />},
		{<Route path: "/create" element: {<CreateNote />} />},
		{<Route path: "/edit/:id" element: {<CreateNote />} />},
		{<Route path: "/user" element: {<CreateUser />} />},
	];

	//Provar para incluir navigation
	/*return (
		<div>
			<Navigation />
			<RouterProvider router={router} />;
		</div>
	)*/

}

export default Router;
