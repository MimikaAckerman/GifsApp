import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './style/GlobalStyle.css'
import styled from "styled-components";
const Login = () => {
  const { loginWithRedirect } = useAuth0;
  return (
    <>
    <LoginContainer>
    <button type="button" className="btn cube cube-hover" onClick={() => loginWithRedirect()}>
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text">Login</div>
      </button>
    </LoginContainer>
     
    </>
  );
};

export default Login;
const LoginContainer = styled.div`
margin-left: 4.5rem;
position: absolute;
margin-top: 12rem;
`
