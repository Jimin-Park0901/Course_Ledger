import React, { useState } from "react";
import "./Reservation.css";

const CheckInPage = () => {
  const [reservationNumber, setReservationNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [checkInStatus, setCheckInStatus] = useState("");

  const handleCheckIn = async () => {
    if (!reservationNumber) {
      setCheckInStatus("Please enter a reservation number.");
      return;
    }

    const currentTime = new Date();
    const checkInStartTime = new Date();
    checkInStartTime.setHours(15, 0, 0); // 3 PM

    if (currentTime < checkInStartTime) {
      setCheckInStatus("Check-in time is after 3 PM.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/reservations/${reservationNumber}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }

      const data = await response.json();

      if (data.success) {
        setRoomNumber(data.roomNumber);
        setCheckInStatus(`Check-in successful! Room number: ${data.roomNumber}`);
      } else {
        setCheckInStatus(data.message);
      }
    } catch (error) {
      setCheckInStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="reservation-container">
      <h1>Check In</h1>
      <label>Reservation Number:</label>
      <input
        type="text"
        value={reservationNumber}
        onChange={(e) => setReservationNumber(e.target.value)}
        placeholder="Enter your reservation number"
      />
      <br />
      <button className="check-in-btn" onClick={handleCheckIn}>
        Check In
      </button>
      <p>{checkInStatus}</p>
    </div>
  );
};

export default CheckInPage;
