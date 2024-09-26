import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Button } from "../../styles";

function Login({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);
    console.log("Login Test", setUser)
  return (
    <Wrapper>
      <h2>Login to GreatReads</h2>
      {showLogin ? (
        <>
          <LoginForm user={user} setUser={setUser} />
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
          <SignUpForm user={user} setUser={setUser} />
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

export default Login;