// components/Navbar/Navbar.jsx

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import Button from "./Button";

import {HiOutlineLogout, HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = ({ user, setUser }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  } 

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>greatreads</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            <li className='nav-item'>
              <Link to = "showall" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>showall</Link>
            </li>
            {/* <li className='nav-item'>
              <Link to = "logout" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>logout</Link>
            </li> */}
            <li className='nav-item'>
              <Link to = "login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>login</Link>
            </li>
            <li className='nav-item'>
              <Link to = "signup" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>signup</Link>
            </li>
            <li className='nav-item'>
              <Link to = "mylibrary" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>my library</Link>
            </li>
            <li className='nav-item'>
              <Link to = "myprofile" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>my profile</Link>
            </li>
            <li className='nav-item'>
              <Button variant="outline" onClick={handleLogoutClick}>
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar