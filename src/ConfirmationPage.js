import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No reservation details available.</p>;
  }

  const {
    reservationNumber,
    checkInDate,
    checkOutDate,
    guests,
    roomType,
    name,
  } = state;

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        <h1>Reservation Confirmed!</h1>
        <p>
          Thank you, <strong>{name}</strong>, for booking with us.
        </p>
        <p>Your reservation number is: <strong>{reservationNumber}</strong></p>
        <div className="reservation-detail">
          <h2>Reservation Details</h2>
          <p>
            <strong>Check-In Date:</strong> {checkInDate}
          </p>
          <p>
            <strong>Check-Out Date:</strong> {checkOutDate}
          </p>
          <p>
            <strong>Guests:</strong> {guests}
          </p>
          <p>
            <strong>Room Type:</strong> {roomType}
          </p>
        </div>
        <button
          className="back-home-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
