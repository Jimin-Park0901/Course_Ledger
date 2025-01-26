import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { checkInDate, checkOutDate, guests, roomType } = state;

  const handleConfirm = () => {
    navigate("/payment", { 
      state: { 
        checkInDate, 
        checkOutDate, 
        guests, 
        roomType 
      } 
    });
  };

  return (
    <div className="confirmation-container">
      <h2>Reservation Summary</h2>
      <p><strong>Check-In Date:</strong> {checkInDate}</p>
      <p><strong>Check-Out Date:</strong> {checkOutDate}</p>
      <p><strong>Guests:</strong> {guests}</p>
      <p><strong>Room Type:</strong> {roomType}</p>
      <button onClick={handleConfirm} className="confirm-button">Confirm Reservation</button>
    </div>
  );
};

export default Confirmation;
