// pages/Login/Login.jsx

import React from 'react';
import "./Login.css";
// import aboutImg from "../../images/about-img.jpg";

const Login = () => {
  return (
    <>
      <h1>THIS IS THE LOGIN PAGE</h1>
    </>
  );
}

export default Login

// // Login.js

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar"
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// // add functionality here to use a demo account while auth isn't working



// function Login() {

//   const initialValues = { 
//     email: '',
//     password:'',
//   };
  
//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string().required('Required'),
//   });
  
//   const LoginForm = () => {
//     const handleSubmit = (values) => {
//       // Handle the form submission here
//       console.log(values);
//     };

//     return (
//       <>
//         <header>
//           <Navbar />
//         </header>
//         <main>
//           <h1>Login</h1>

//           <Formik 
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >

//             <form>
//               <div>
//                 <label htmlFor="email">Email</label>
//                 <Field type="email" id="email" name="email" />
//                 <ErrorMessage name="email" component="div" />
//               </div>
//               <div>
//                 <label htmlFor="password">Password</label>
//                 <Field type="password" id="password" name="password" />
//                 <ErrorMessage name="password" component="div" />
//               </div>
//               <button type="submit">Submit</button>
//             </form>
//           </Formik>

//           {/* <form>   OLD PLACEHOLDER FORM
//             <div>
//               <label for="username">Username: </label>
//               <input id="username" type="text" name="username" placeholder="Username" />
//             </div>
//             <br/>
//             <div>
//               <label for="password">Password: </label>
//               <input id="password" type="password" name="password" placeholder="Password" />
//             </div>
//             <br/>
//             <button type="submit">Submit</button>
//           </form> */}

//         </main>
//       </>
//     );
//   };
  
//   export default Login;



{/* <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Login</h2>
        </div>

    //     <div className='about-content grid'>
    //       {/* <div className='about-img'>
    //         <img src = {aboutImg} alt = "" />
    //       </div> */}
    //       <div className='about-text'>
    //         <h2 className='about-title fs-26 ls-1'>Login to GreatReads</h2>
    //         <p className='fs-17'>GreatReads was developed by Ken Richlin as a capstone project for the Flatiron School's Software Engineering program.  GreatReads leverages OpenLibrary's API to get data on books, check out <u><a href='http://www.openlibrary.org'>OpenLibrary.org</a></u> for more information.</p>
    //         <p className='fs-17'>GreatReads was built with JavaScript, JSX and React on the frontend, with a Python, Flask and SQLite database on the back.  For our deployment phase, we will migrate database to PosgGreSQL.  Finally, we hope to port the entire project to run on mobile with React Native.  For more information, check out <u><a href="https://github.com/krichlin/">My Github Page</a></u></p>
    //         <p className='fs-17'>Background image by kjpargeter on Freepik</p>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}