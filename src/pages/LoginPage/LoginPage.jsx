import React from "react";
import { Link } from "react-router-dom";

import "./Style.css";
const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="neon">App </div>
        <div className="flux">Gifs 🤖</div>
      </div>

      <div className="login">
        <div className="form">
          <h2>Welcome User</h2>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <Link to={"/"}>
            <input type="submit" value="Sign In" className="submit" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
