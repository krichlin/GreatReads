import React from 'react';
import Navbar from "../Navbar/Navbar";
// import NavBar from "../NavBar/NavBar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            {/* <NavBar /> */}
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your next Great Read!</h2><br />
                <p className='header-text fs-18 fw-3'>Search our database for your favorite books!  It's fun and easy, just click the Search Form to get started: </p>
                <SearchForm />
            </div>
        </header>
    </div>
  );
};
export default Header;