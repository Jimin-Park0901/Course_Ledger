import React, { useState } from 'react';
import './Reservation.css'; // You can create a separate CSS file for styling

const Reservation = () => {
  const [reservationNumber, setReservationNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [checkInStatus, setCheckInStatus] = useState('');
  const [checkOutStatus, setCheckOutStatus] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  const handleCheckIn = () => {
    const currentTime = new Date();
    const checkInDate = new Date(currentTime.setHours(15, 0, 0)); // 3 PM

    // Assuming reservation number corresponds to a room number
    if (reservationNumber && roomNumber) {
      if (new Date() < checkInDate) {
        setCheckInStatus('Check-in time must be after 3 PM.');
      } else {
        setCheckInStatus(`Check-in successful! Room number: ${roomNumber}`);
      }
    } else {
      setCheckInStatus('Please enter a valid reservation number and room number.');
    }
  };

  const handleCheckOut = () => {
    const currentTime = new Date();
    const checkOutLimit = new Date(currentTime.setHours(11, 0, 0)); // 11 AM

    if (new Date() > checkOutLimit) {
      setCheckOutStatus('Check-out time must be before 11 AM.');
    } else {
      setCheckOutStatus(`Check-out successful! Room number: ${roomNumber}`);
    }
  };

  return (
    <div className="reservation-container">
      <h1>CheckIn & CheckOut</h1>

      {/* Check-in Section */}
      <div className="check-in-section">
        <h2>Check-in</h2>
        <label>Reservation Number:</label>
        <input
          type="text"
          value={reservationNumber}
          onChange={(e) => setReservationNumber(e.target.value)}
          placeholder="Enter your reservation number"
        />
        <br />
        <br />
        <button className="check-in-btn" onClick={handleCheckIn}>Check-in</button>
        <p>{checkInStatus}</p>
      </div>

      {/* Check-out Section */}
      <div className="check-out-section">
        <h2>Check-out</h2>
        <label>Room Number:</label>
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          placeholder="Enter your room number"
        />
        <br />
        <button className="check-out-btn" onClick={handleCheckOut}>Check-out</button>
        <p>{checkOutStatus}</p>
      </div>
    </div>
  );
};

export default Reservation;
