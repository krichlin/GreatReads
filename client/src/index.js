// /src/index.js

import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import { BrowserRouter as Router, 
    RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./components/App";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";

// import CreateAccount from "./components/pages/CreateAccount";
// import MyLibrary from "./components/pages/MyLibrary";
// import Search from "./components/pages/Search";

// import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/login",
        element: <Login />
    }
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={router}/>);

// root.render(
//     <Router>
//         <App />
//     </Router>
// );

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>
//     /* document.getElementById('root') */
// );