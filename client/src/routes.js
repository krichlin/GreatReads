// routes.js

// Move all React routs out of index.js and into this file.
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import CreateAccount from "./pages/CreateAccount";
import MyLibrary from "./pages/MyLibrary";
import Friends from "./pages/Friends";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import MyProfile from "./pages/MyProfile";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "about",
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
        path: "search",
        element: <Search />,
        errorElement: <ErrorPage />
    },
    {
        path: "createnew",
        element: <CreateAccount />,
        errorElement: <ErrorPage />
    },
    {   path: "mylibrary",
        element: <MyLibrary />,
        errorElement: <ErrorPage />
    },
    {
        path: "friends",
        element: <Friends />,
        errorElement: <ErrorPage />
    },
    {
        path: "/book",
        element: <BookList />,
        errorElement: <ErrorPage />
    },
    {
        path: "/book/:id",
        element: <BookDetails />,
        errorElement: <ErrorPage />
    },
    {
        path: "/myprofile",
        element: <MyProfile />,
        errorElement: <ErrorPage />
    }

];

export default routes;