import { useLocation } from "react-router-dom";

const History = () => {
  const location = useLocation();
  const ticket = location.state?.ticket;

  if (!ticket) {
    return <p>No ticket in history</p>;
  }

  return (
    <div>
      <h2>History Ticket</h2>
      <h3>{ticket.title}</h3>
      <p>{ticket.date} | {ticket.time}</p>
      <p>Seats: {ticket.selectedSeats?.join(", ") || "—"}</p>
      <p>Total: {(ticket.totalPrice || 0).toFixed(2)}$</p>
    </div>
  );
};

export default History;
