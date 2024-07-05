// routes.js

// Move all React routs out of index.js and into this file.

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import UserProfile from "./components/pages/UserProfile";
import ErrorPage from "./components/pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage />
    }
];

export default routes;