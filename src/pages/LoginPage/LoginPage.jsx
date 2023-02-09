import React from 'react'
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from "styled-components";

import './Style.css'
const LoginPage = () => {
  return (
    <>
    <GlobalStyle />

<div className="container">
  <div className="neon">App </div>
  <div className="flux">Gifs 🤖</div>
</div>




   
        <div className="login">
            <div className="form">
                <h2>Welcome User</h2>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <Link to={'/'}>
                <input type="submit" value="Sign In" className='submit'/>
                </Link>
            </div>
        </div>
        
   
    
    </>
  )
}

export default LoginPage

const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => (props.blackColor ? "black" : "black")};
   background-color: #1E213E;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  }
`;
