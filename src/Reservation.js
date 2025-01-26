import React from "react";
import { Link } from "react-router-dom";
import "./Reservation.css"; // Shared styling file

const Reservation = () => {
  return (
    <div className="reservation-container">
      <h1>Welcome to the Hotel Reservation System</h1>
      <div className="homepage-buttons">
        <Link to="/check-in">
          <button className="home-btn">Check In</button>
        </Link>
        <Link to="/check-out">
          <button className="home-btn">Check Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
