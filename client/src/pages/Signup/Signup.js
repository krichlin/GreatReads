
import React from "react";
import styled from "styled-components"

// import NavBar from "../components/NavBar";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import { Button } from "../../styles";

function SignUp() {
    return (
        <Wrapper>
            <h2>Sign Up for GreatReads</h2>

            <main>
                <h1 className="signup-header">Welcome to GreatReads!</h1>
                <h4 className="signup-title">Please use the form below to sign up!</h4>
                <SignUpForm />

            </main>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default SignUp;