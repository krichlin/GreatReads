// /src/components/NavBar.js

import { NavLink } from "react-router-dom";
import "./NavBar.css";
// <img src="/img/Greatreads-cropped.jpg" alt="greatreads icon">

// import logoImg from "../../images/logo.png";
import bannerImg from "../../images/Greatreads-cropped.jpg";

/* define the NavBar component */
function NavBar() {
  return (
    <>
        <img src={bannerImg} alt="greatreads banner"/>
        <nav>
          <NavLink
            to="/"
            /* add styling to Navlink */
            className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/mylibrary"
            className="nav-link"
          >
            My Library
          </NavLink>
          <NavLink
            to="/book"
            className="nav-link"
          >
            My Books
          </NavLink>
          <NavLink
            to="/friends"
            className="nav-link"
          >
            Friends
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
          >
            About
          </NavLink>
          <NavLink
            to="/search"
            /* add styling to Navlink */
            className="nav-link"
          >
            Search
          </NavLink>
          <NavLink
            to="/login"
            className="nav-link"
          >
            Login
          </NavLink>
          <NavLink
            to="/createnew"
            className="nav-link"
          >
            Create Account
          </NavLink>
        </nav>
    </>
  );
};

export default NavBar;