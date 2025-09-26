import { useLocation, useNavigate } from "react-router-dom";
import "./Add.css";

const Add = ({ addTicket }) => {
  const navigate = useNavigate();
  const location = useLocation();


    const handlDownload = () => {
    const ticketData = { title, date, time, selectedSeats, totalPrice };


    navigate("/carty", { state: { newTicket: ticketData } });
  };

  const { title, date, time, selectedSeats, totalPrice } = location.state || {};

  if (!title || !date || !time) {
    return (
      <div className="ticket-detail-wrapper">
        <h2>❌ Ошибка: данные билета не найдены</h2>
        <button onClick={() => navigate("/")}>На главную</button>
      </div>
    );
  }

  const tickets = [
    { label: `Ticket (${selectedSeats?.length || 0})`, value: selectedSeats?.join(", ") || "—" },
    { label: "Hours", value: time || "—" },
  ];

  const transactionDetails = [
    { label: "REGULAR SEAT", value: `${(totalPrice || 0).toFixed(2)}$` },
    { label: "Service Charge (6%)", value: `${((totalPrice || 0) * 0.06).toFixed(2)}$` },
    { label: "Total payment", value: `${((totalPrice || 0) * 1.06).toFixed(2)}$` },
  ];

  
  const handleDownload = () => {
    const ticketData = { title, date, time, selectedSeats, totalPrice };
    if (addTicket) {
      addTicket(ticketData);
    }
    alert("🎟️ Билет добавлен в Upcoming!");
  };

  return (
    <div className="order">
      <div className="o-detaill">
        <h2>🎟️ Ticket Detail</h2>

        <h4>Movie Title</h4>
        <p>{title}</p>

        <h4>Date</h4>
        <p>{date}</p>

        <div className="ticket-info">
          {tickets.map((item, index) => (
            <div key={index} className="seet">
              <p className="se">{item.label}</p>
              <h4 className="se">{item.value}</h4>
            </div>
          ))}
        </div>

        <div className="actions">
          <button className="download-btn" onClick={handlDownload}>
            Download Ticket
          </button>
        </div>
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Homepage
      </button>
    </div>
  );
};

export default Add;
