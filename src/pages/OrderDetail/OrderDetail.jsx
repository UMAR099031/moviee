import React from "react";
import "./OrderDetail.css";
const OrderDetail = () => {
  return (
    <div className="order">
      <div className="o-detail">
        <h2>Booking Detail</h2>
        <h4>Shedule</h4>
        <p>Movie Title</p>
        <h3>SPIDERMAN NO WAY HOME</h3>
        <p>Date</p>
        <h4>Mon, 23 Oct 2023</h4>
        <div className="ticket-info">
          <div className="seet">
            <p>Ticket(3)</p>
            <h4>C8, C9, C10</h4>
          </div>

          <div className="hour">
            <p>Hours</p>
            <h4>14:40</h4>
          </div>
        </div>
        <p>Transaction Detail</p>
        <div className="t-detail">
          <div>
            <h4>REGULAR SEAT</h4>
            <h4>RM 55.70 x3</h4>
          </div>
          <div>
            <h4>Service Charge (6%)</h4>
            <h4>RM 3.30 x3</h4>
          </div>
          <div>
            <h4>Total payment</h4>
            <h4>RM 62.10</h4>
          </div>
        </div>
        <p>*Purchased ticket cannot be canceled</p>
        <button>Checkout Ticket</button>
      </div>
    </div>
  );
};

export default OrderDetail;
