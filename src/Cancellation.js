import React, { useState } from "react";
import "./Cancellation.css"; // Shared styling file

const Cancellation = () => {
  const [reservationId, setReservationId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCancellation = (e) => {
    e.preventDefault();

    // Add logic here to handle cancellation
    // Example: Call an API to cancel the reservation using the reservation ID and email
    if (reservationId && email) {
      setMessage("Your reservation has been successfully canceled.");
      setReservationId("");
      setEmail("");
    } else {
      setMessage("Please fill in all fields to proceed with the cancellation.");
    }
  };

  return (
    <div className="cancellation-container">
      <h1>Cancel Your Reservation</h1>
      <form className="cancellation-form" onSubmit={handleCancellation}>
        <div className="form-group">
          <label htmlFor="reservationId">Reservation ID</label>
          <input
            type="text"
            id="reservationId"
            value={reservationId}
            onChange={(e) => setReservationId(e.target.value)}
            placeholder="Enter your reservation ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>
        <button type="submit" className="cancel-button">
          Cancel Reservation
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Cancellation;
