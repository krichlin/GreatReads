// components/App.js

import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "../context.";

// import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const SpaceContext = createContext();
export const useSpace = () => useContext(SpaceContext);


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return (
      <>
        <h2>Welcome, {user.username}!</h2>
        <Header/> )
      </>
    )
  } else {
    return (
      <>
        <Login onLogin={setUser} />
        <Header />
      </>
    )
  }

  // return (
  //   <>
  //     <Header/>
  //     {/* <Home/> */}
  //   </>
  // )
  
}

export default App;