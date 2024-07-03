// /src/index.js

import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter as Router} from 'react-router-dom';  
import { 
    //BrowserRouter as Router, 
    RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./components/App";
import Home from "./components/pages/Home";
// import "./index.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<RouterProvider router={router}/>);
root.render(<App />);


// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>
//     /* document.getElementById('root') */
// );