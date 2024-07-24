// pages/About/About.jsx

import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About GreatReads</h2>
            <p className='fs-17'>GreatReads was developed by Ken Richlin as a capstone project for the Flatiron School's Software Engineering program.  GreatReads leverages OpenLibrary's API to get data on books, check out <u><a href='http://www.openlibrary.org'>OpenLibrary.org</a></u> for more information.</p>
            <p className='fs-17'>GreatReads was built with JavaScript, JSX and React on the frontend, with a Python, Flask and SQLite database on the back.  For our deployment phase, we will migrate database to PosgGreSQL.  Finally, we hope to port the entire project to run on mobile with React Native.  For more information, check out <u><a href="https://github.com/krichlin/">My Github Page</a></u></p>
            <p className='fs-17'>Background image by kjpargeter on Freepik</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About