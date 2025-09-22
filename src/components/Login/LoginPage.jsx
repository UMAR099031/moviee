import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <div className="blur-top"></div>
      <div className="blur-bottom"></div>


      <div className="form-wrapper">
        <div className="div-1">
          <h1>Login to your account</h1>

          <h4>Email</h4>
          <input type="email" placeholder="Enter your email" />

          <h4>Password</h4>
          <input type="password" placeholder="Enter your password" />

          <br />
          <button className="btn-3">Login now</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
