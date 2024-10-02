// components/App.js

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { AppContext } from "../context.";
import Login from './/../pages/Login/Login';
// import { Switch, Route } from "react-router-dom";
import Home from './/../pages/Home/Home';
import Header from './/../components/Header/Header';
import About from './/../pages/About/About';
import BookList from './/../components/BookList/BookList';
import BookDetails from './/../components/BookDetails/BookDetails';
import BookListAll from './/../components/BookListAll/BookListAll';
// import SignUpForm from './/../components/SignUpForm/SignUpForm';
import Signup from ".//../pages/Signup/Signup";
import Navbar from './/../components/Navbar/Navbar';
import MyLibrary from './/../pages/MyLibrary/MyLibrary';
import MyProfile from './/../pages/MyProfile/MyProfile';
// import LoginForm from "./LoginForm/LoginForm";

// const SpaceContext = createContext();
// export const useSpace = () => useContext(SpaceContext);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} user={user} />;

  return (
    <>
      <h2>Welcome, {user.username}!</h2>
      <Navbar setUser={setUser} user={user}/>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "/about" element = {<About />} />
          <Route path = "/login" element = {<Login setUser={setUser} user={user} />} />
          <Route path = "/book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} /> 
          <Route path = "/showall" element = {<BookListAll />} />
          <Route path = "/signup" element = {<Signup />} /> */}
          <Route path = "/mylibrary" element = {<MyLibrary />} />
          <Route path = "/myprofile" element = {<MyProfile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;

