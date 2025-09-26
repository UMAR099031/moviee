import React from "react";
import "./OTP.css";
const OTP = ({setContent}) => {
  return (
    <div className="otp">

      <h2>Enter OTP</h2>

      <div className="otp-input">

        <input type="number" />

        <input type="number" />

        <input type="number" />

        <input type="number" />

      </div>
      <button onClick={() => setContent("payment")}>Submit</button>
    </div>
  );
};

export default OTP;
