import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateNote from "../components/CreateNote";
import CreateUser from "../components/CreateUser";
import Navigation from "../components/Navigation";
import NoteList from "../components/NoteList";



function Router() {
	const router = createBrowserRouter([
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

	return <RouterProvider router={router} />;
	//Provar para incluir navigation
	/*return (
		<div>
			<Navigation />
			<RouterProvider router={router} />;
		</div>
	)*/
	
}

export default Router;
