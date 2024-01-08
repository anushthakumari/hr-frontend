import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Quiz from "./pages/Quiz";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/quiz/:id",
		element: <Quiz />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
