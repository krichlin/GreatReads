// /src/pages/MyProfile/MyProfile.jsx

import { React, useEffect, useState } from 'react';
import "./MyProfile.css";
// import defaultImg from "../../images/pikachu.png";

const MyProfile = () => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        // fetch("http://127.0.0.1:8000/myprofile")
        fetch("/myprofile")
        .then((r) => r.json())
        .then((profile) => setProfile(profile))
    }, []);

    console.log("🚀 ~ MyProfile ~ profile:", profile)
    // extract image from profile
    // const userImg = "https://pbs.twimg.com/profile_images/1258966258122457088/6xmkCTOr_400x400.jpg";
    // const userImg = profile.image_url;
    // console.log (userImg);

    function handleUpdate(profile){
        // This doesn't like the UseEffect call.  Maybe just jump right to the fetch, since it's already OnClick?
        // useEffect(() => {
        //     fetch("/myprofile")
        //     .then((r) => r.json())
        //     .then((profile) => setProfile(profile))
        // }, []);
    }
    function handleDelete(profile){

    }

    return (
        <section className='myprofile'>
            <div className='container'>
                <div className='section-title'>
                <h2>My Profile</h2>
                </div>
            </div>
            <div className='myprofile-content grid'>
                <div className='myprofile-img'>
                <img src = {profile.image_url} alt = "user" />
                {/* <img src = {defaultImg} alt = "user" /> */}
                </div>
            </div>
            <div className='myprofile-text'>
                <h2 className='myprofile-title fs-26 ls-1'>About Me</h2>
                <p className='fs-17'>{profile.bio}</p>
                {/* <h2 className ='myprofile-title fs-26 ls-1'>Click Here to Update Bio </h2>
                <h2 className='myprofile-title fs-26 ls-1'>Click Here to Delete Account</h2> */}
                <div className='book-add-button'>
                    <button type='button' className='flex flex-c' onClick={() => (handleUpdate(profile))}>CLICK HERE TO UPDATE PROFILE </button>
                </div>
                <div className='book-add-button'>
                    <button type='button' className='flex flex-c' onClick={() => (handleDelete(profile))}>CLICK HERE TO DELETE ACCOUNT </button>
                </div>
            </div>
        </section>
    )
}

export default MyProfile