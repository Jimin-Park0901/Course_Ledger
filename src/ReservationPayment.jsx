import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ReservationPayment.css";

import standard from "./assets/hotel_inside1.jpeg";
import deluxe from "./assets/hotel_inside2.jpeg";
import suite from "./assets/hotel_inside3.jpeg";
import family from "./assets/hotel_inside4.jpeg";

const ReservationPayment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { checkInDate, checkOutDate, guests, roomType } = state;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCvc] = useState("");

  const getRoomImage = () => {
    switch (roomType) {
      case "Standard Room":
        return standard;
      case "Deluxe Room":
        return deluxe;
      case "Suite":
        return suite;
      case "Family Room":
        return family;
      default:
        return standard; // Fallback to standard if roomType is not recognized
    }
  };

  const handlePayment = (event) => {
    event.preventDefault();
    alert("Reservation confirmed! Thank you for booking with us.");
    navigate("/"); // Redirect to home or another page after confirmation
  };

  return (
    <div className="reservation-payment-container">
      {/* Left: Reservation Summary */}
      <div className="summary-section">
        <h2>Reservation Summary</h2>
        <img
          src={getRoomImage()}
          alt={`${roomType} Room`}
          className="room-image"
        />
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
      {/* Right: Payment Form */}
      <div className="payment-section">
        <form onSubmit={handlePayment} className="payment-form">
          <h2>Who's checking in?</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <h2>Payment Method</h2>
          <div className="form-group">
            <label>Card Name</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Expiration Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>CVC</label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
            />
          </div>
          <div className="cancellation-policy">
            <p>
              <strong>Cancellation Policy:</strong> Free cancellation up to 48
              hours before check-in.
            </p>
          </div>
          <button type="submit" className="submit-button">
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPayment;
