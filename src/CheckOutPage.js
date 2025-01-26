import React, { useState } from "react";
import "./Reservation.css";

const CheckOutPage = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [checkOutStatus, setCheckOutStatus] = useState("");

  const handleCheckOut = () => {
    if (!roomNumber) {
      setCheckOutStatus("You need to check in first before checking out.");
      return;
    }

    const currentTime = new Date();
    const checkOutTime = new Date();
    checkOutTime.setHours(11, 0, 0); // 11 AM

    if (currentTime > checkOutTime) {
      setCheckOutStatus("Check-out time must be before 11 AM.");
    } else {
      setRoomNumber(""); // Clear the room number after checkout
      setCheckOutStatus(`Check-out successful! Room number: ${roomNumber}`);
    }
  };

  return (
    <div className="reservation-container">
      <h1>Check Out</h1>
      <label className="form-group">Room Number:</label>
      <input
        type="text"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
        placeholder="Enter your room number"
      />
      <br />
      <button className="check-out-btn" onClick={handleCheckOut}>
        Check Out
      </button>
      <p>{checkOutStatus}</p>
    </div>
  );
};

export default CheckOutPage;
