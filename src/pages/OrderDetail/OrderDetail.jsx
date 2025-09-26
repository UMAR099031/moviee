import { useState } from "react";
import { useLocation } from "react-router-dom"; 
import "./OrderDetail.css";
import OTP from "../../components/OTP/OTP";
import PaymentSuccess from "../../components/PaymentSuccess/PaymentSuccess";

const OrderDetail = () => {
  const [content, setContent] = useState("");

  const location = useLocation();
  const { title, date, time, selectedSeats, totalPrice } = location.state || {};

  
  const checkoutClick = () => {
    setContent("otp");
  };

  if (content === "otp") {
    return <OTP setContent={setContent} />;
  }
  if (content === "payment") {
    return <PaymentSuccess />;
  }


  const tickets = [
    { label: `Ticket(${selectedSeats?.length || 0})`, value: selectedSeats?.join(", ") || "—" },
    { label: "Hours", value: time || "—" },
  ];


  const transactionDetails = [
    { label: "REGULAR SEAT", value: `${(totalPrice || 0).toFixed(2)}$` },
    { label: "Service Charge (6%)", value: `${((totalPrice || 0) * 0.06).toFixed(2)}$` },
    { label: "Total payment", value: `${((totalPrice || 0) * 1.06).toFixed(2)}$` },
  ];

  return (
    <div className="order">
      <div className="o-detail">
        <h2>Booking Detail</h2>
        <h4>Schedule</h4>
        <p>Movie Title</p>
        <h4>{title || "—"}</h4>

        <p>Date</p>
        <h4>{date || "—"}</h4>

        <div className="ticket-info">
          {tickets.map((item, index) => (
            <div key={index} className="seet">
              <p className="se">{item.label}</p>
              <h4 className="se">{item.value}</h4>
            </div>
          ))}
        </div>

        <p>Transaction Detail</p>

   
        <div className="t-detail">
          {transactionDetails.map((item, index) => (
            <div key={index}>
              <h4>{item.label}</h4>
              <h4>{item.value}</h4>
            </div>
          ))}
        </div>

        <p>*Purchased ticket cannot be canceled</p>
        <button onClick={checkoutClick}>Checkout Ticket</button>
      </div>
    </div>
  );
};

export default OrderDetail;
