// Login.js

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import { Formik } from 'formik';
import * as Yup from 'yup';

// add functionality here to use a demo account while auth isn't working



function Login() {

  const initialValues = { 
    email: '',
    password:'',
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });
  
  const LoginForm = () => {
    const handleSubmit = (values) => {
      // Handle the form submission here
      console.log(values);
    };

    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <h1>Login</h1>

          <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >

            <form>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </Formik>

          {/* <form>   OLD PLACEHOLDER FORM
            <div>
              <label for="username">Username: </label>
              <input id="username" type="text" name="username" placeholder="Username" />
            </div>
            <br/>
            <div>
              <label for="password">Password: </label>
              <input id="password" type="password" name="password" placeholder="Password" />
            </div>
            <br/>
            <button type="submit">Submit</button>
          </form> */}

        </main>
      </>
    );
  };
  
  export default Login;