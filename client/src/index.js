// /src/index.js

import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import { BrowserRouter as Router, 
    RouterProvider, createBrowserRouter } from "react-router-dom";

// import App from "./components/App";


// import CreateAccount from "./components/pages/CreateAccount";
// import MyLibrary from "./components/pages/MyLibrary";
// import Search from "./components/pages/Search";

import "./index.css";
import routes from "./routes.js";

const router = createBrowserRouter(routes);
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