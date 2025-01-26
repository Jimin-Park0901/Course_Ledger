import React from "react";
import { Link } from "react-router-dom";
import { FaDoorOpen, FaDoorClosed } from "react-icons/fa"; // Import icons
import "./Reservation.css"; // Shared styling file

const Reservation = () => {
  return (
    <div className="reservation-container">
      <h1>Hotel Reservation System</h1>
      <div className="homepage-cards">
        {/* Check In Card */}
        <Link to="/check-in" className="card-link">
          <div className="card">
            <FaDoorOpen className="icon" /> {/* Check In Icon */}
            <h2>Check In</h2>
            <p>Start your stay with a quick and easy check-in process.</p>
          </div>
        </Link>

        {/* Check Out Card */}
        <Link to="/check-out" className="card-link">
          <div className="card">
            <FaDoorClosed className="icon" /> {/* Check Out Icon */}
            <h2>Check Out</h2>
            <p>Finish your stay by checking out seamlessly.</p>
          </div>
        </Link>
      </div>

      {/* Cancellation Option */}
      <div className="cancellation-section">
        <Link to="/cancellation" className="cancellation-link">
          Need to cancel your reservation? Click here.
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
