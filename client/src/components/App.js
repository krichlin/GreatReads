// components/App.js

import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "../context.";
import Login from './/../pages/Login/Login';
// import { Switch, Route } from "react-router-dom";
import Home from './/../pages/Home/Home';
import Header from './/../components/Header/Header';
import About from './/../pages/About/About';
import BookList from './/../components/BookList/BookList';
import BookDetails from './/../components/BookDetails/BookDetails';
import BookListAll from './/../components/BookListAll/BookListAll';
import SignUpForm from './/../components/SignUpForm/SignUpForm';



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

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <h2>Welcome, {user.username}!</h2>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "login" element = {<Login onLogin={setUser} />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} /> 
          <Route path = "showall" element = {<BookListAll />} />
          <Route path = "signup" element = {<SignUpForm />} />
        </Route>
      </Routes>
      {/* Show My Library Here Once It's Working  */}
    </>
  )
}

export default App;
  // return (
  //   <>
  //     <Header/>
  //     {/* <Home/> */}
  //   </>
  // )
