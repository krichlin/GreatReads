// /src/pages/MyProfile.jsx

import React from 'react';
import "./MyProfile.css";

// import aboutImg from "../../images/about-img.jpg";

// Out here, grab the user's profile and load it into new object
// currentUserProfile

const userIMG = "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png";



const MyProfile = () => {
    return (
        <section className='myprofile'>
            <div className='container'>
                <div className='section-title'>
                <h2>My Profile</h2>
                </div>
            </div>
            <div className='myprofile-content grid'>
                <div className='myprofile-img'>
            {/* Make a call here to grab the profile image URL */}
                <img src = {userIMG} alt = "" />
            </div>
            <div className='myprofile-text'>
                <h2 className='myprofile-title fs-26 ls-1'>About Me</h2>
                <p className='fs-17'>This should be where my bio text goes</p>
            </div>
            </div>
        </section>
    )
}

export default MyProfile