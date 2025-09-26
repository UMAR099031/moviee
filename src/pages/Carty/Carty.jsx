import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Carty.css";

const Tickets = () => {
  const location = useLocation();
  const [upcomingTickets, setUpcomingTickets] = useState([]);
  const [historyTickets, setHistoryTickets] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (location.state?.newTicket) {
      setUpcomingTickets((prev) => {
        const alreadyAdded = prev.some(
          (t) =>
            t.title === location.state.newTicket.title &&
            t.date === location.state.newTicket.date &&
            t.time === location.state.newTicket.time
        );
        if (!alreadyAdded) {
          return [...prev, location.state.newTicket];
        }
        return prev;
      });
    }
  }, [location.state]);

  const handleDownload = (ticket) => {
    setUpcomingTickets((prev) =>
      prev.filter(
        (t) =>
          !(
            t.title === ticket.title &&
            t.date === ticket.date &&
            t.time === ticket.time
          )
      )
    );

    setHistoryTickets((prev) => [...prev, ticket]);
  };

  return (
    <div className="glav">
      <div className="down">
        <button className="up" onClick={() => setShowHistory(false)}>
          Upcoming
        </button>
        <button className="hi" onClick={() => setShowHistory(true)}>
          History
        </button>
      </div>

      {showHistory ? (
        historyTickets.length === 0 ? (
          <p>No tickets in history</p>
        ) : (
          historyTickets.map((ticket, idx) => (
            <div key={idx} className="ticket-card">
              <h3>{ticket.title}</h3>
              <p>
                {ticket.date} | {ticket.time}
              </p>
              <p>Seats: {ticket.selectedSeats?.join(", ") || "—"}</p>
              <p>Total: {(ticket.totalPrice || 0).toFixed(2)}$</p>
            </div>
          ))
        )
      ) : upcomingTickets.length === 0 ? (
        <p>тикеттер жок</p>
      ) : (
        upcomingTickets.map((ticket, idx) => (
          <div key={idx} className="ticket-card">
            <h3>{ticket.title}</h3>
            <p>
              {ticket.date} | {ticket.time}
            </p>
            <p>Seats: {ticket.selectedSeats?.join(", ") || "—"}</p>
            <p>Total: {(ticket.totalPrice || 0).toFixed(2)}$</p>
            <button onClick={() => handleDownload(ticket)}>
              Download Ticket
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Tickets;
