// routes.js

// Move all React routs out of index.js and into this file.

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import UserProfile from "./components/pages/UserProfile";
import ErrorPage from "./components/pages/ErrorPage";
import Search from "./components/pages/Search";
import CreateAccount from "./components/pages/CreateAccount";
import MyLibrary from "./components/pages/MyLibrary";
import Friends from "./components/pages/Friends";

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
    },
    {
        path: "/search",
        element: <Search />,
        errorElement: <ErrorPage />
    },
    {
        path: "/createnew",
        element: <CreateAccount />,
        errorElement: <ErrorPage />
    },
    {   path: "/mylibrary",
        element: <MyLibrary />,
        errorElement: <ErrorPage />
    },
    {
        path: "/friends",
        element: <Friends />,
        errorElement: <ErrorPage />
    }
];

export default routes;