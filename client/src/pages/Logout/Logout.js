import { useState } from "react";
import styled, { StyleSheetConsumer } from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Button } from "../../styles";
import { Navigate } from "react-router-dom";

function Logout({ onLogout }) {
    const [showLogin, setShowLogin] = useState(true);
    console.log("Logout Test", Logout)

    fetch("/api/logout",
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) =>  {
            if(resp.ok) {
                setUser(null);
                navigate(/)
            }
        });

    return (
        <Wrapper>
            <h2>Login to GreatReads</h2>
            {showLogin ? (
        <>
        <LoginForm onLogin={onLogin} />
        <Divider />
        <p>
            Don't have an account? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
                </Button>
        </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Logout;