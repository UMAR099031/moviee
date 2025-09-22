import React from "react";
import "./Register.css";
import { Link } from "react-router-dom"; // для перехода без перезагрузки

const RegisterPage = () => {
  return (
    <div>
      {/* Кнопка возврата на главную */}

      <div className="form-wrapper">
        <div className="div-1">
          <h1>Create an account</h1>

          <h4>Email</h4>
          <input type="email" placeholder="Enter your email" />

          <h4>Password</h4>
          <input type="password" placeholder="Enter your password" />

          <br />

          <input type="password" placeholder="Confirm your password" />

          <br />
          <button className="btn-3">Create account</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
