// /src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import createRoot from "react-dom/client";
import { BrowserRouter as Router, RouterProvider, createBrowserRouter, 
    Routes, Route } from "react-router-dom";
import { AppProvider } from './context';

// moved all imports into routes.js 
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import UserProfile from "./pages/UserProfile";
// import ErrorPage from "./pages/ErrorPage";
// import Search from "./pages/Search";
// import CreateAccount from "./pages/CreateAccount";
// import MyLibrary from "./pages/MyLibrary";
// import Friends from "./pages/Friends";
// import BookList from "./components/BookList/BookList";
// import BookDetails from "./components/BookDetails/BookDetails";

import "./index.css";
import routes from "./routes.js";

// This sequence used to work:

const router = createBrowserRouter(routes);
// const container = document.getElementById("root");
// const root = createRoot(container);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <RouterProvider router={router}/>
  </AppProvider>
  );


// This never worked:
//root.render(
//     <Router>
//         <App />
//     </Router>
// );

// This, also never worked:
// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>
//     /* document.getElementById('root') */
// );\

// Original Way:
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//       <Routes>
//         <Route path = "/" element = {<Home />}>
//           <Route path = "/about" element = {<About />} />
//           <Route path = "/book" element = {<BookList />} />
//           <Route path = "/book/:id" element = {<BookDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
// );