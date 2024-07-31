// components/Footer/Footer.jsx

import React from 'react';
import "./Footer.css";

const Header = () => {
  return (
    <div className='holder'>
        <footer className='footer'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your next Great Read!</h2><br />
                {/* <SearchForm /> */}
            </div>
        </footer>
    </div>
  )
}

export default Header