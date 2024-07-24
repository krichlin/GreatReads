// components/Header/Header.jsx

import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your next Great Read!</h2><br />
                <p className='header-text fs-18 fw-3'>Enter Your terms in the search bar to search OpenLibrary.org's expansive database of books.  Find new books to read, share, and review here on Great Reads!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header