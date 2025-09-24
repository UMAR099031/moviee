
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Bron.css";

const SeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

 
  const { title, poster_path, theater, date, time } = location.state || {};


  const rows = ["A", "B", "C", "D"];
  const seatsPerRow = 8;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const totalPrice = selectedSeats.length * 18.95; 

  return (
    <div className="seat-page">
        <h1>Seat</h1>
      <h2>{title}</h2>
      <p>
        {theater} | {date} | {time}
      </p>
      <img
      width={250}
      height={300}
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
        className="poster"
      />

      <div className="seats">
        {rows.map((row) => (
          <div key={row} className="row">
            {Array.from({ length: seatsPerRow }).map((_, i) => {
              const seat = `${row}${i + 1}`;
              const isSelected = selectedSeats.includes(seat);
              return (
                <button
                  key={seat}
                  className={`seat ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="summary">
        <p>Выбранные места: {selectedSeats.join(", ") || "нет"}</p>
        <p>Итого: {totalPrice.toFixed(2)}$</p>
        <span className="spani">
        <button
          className="proceed"
          disabled={selectedSeats.length === 0}
          onClick={() => alert("Payment successful!")}
        >
          Proceed payment
        </button>
        <button className="my-button" onClick={() => navigate(-2)}>уйго</button>
        </span>

      </div>
    </div>
  );
};

export default SeatSelection;
