import React, { useState } from 'react';
import './PaymentSuccess.css';
import Add from '../Add/Add';
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cnt, setCnt] = useState("carty");


  const { title, date, time, selectedSeats, totalPrice } = location.state || {};

  if (cnt === "add") {
    return (
      <Add
        title={title}
        date={date}
        time={time}
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
        setCnt={setCnt} 
      />
    );
  }

  return (
    <div className='wrap'>
      <div className='payment-success'>
        <h2>Payment Success</h2>
        <img src="/src/assets/succes.svg" alt="" />
        <button onClick={() => setCnt("add")}>View Ticket</button>
        <button className='btn-25' onClick={() => navigate(-3)}>Back to Homepage</button>
      </div>
    </div>
  )
}

export default PaymentSuccess;
