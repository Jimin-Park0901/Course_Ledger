import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Rooms from "./Rooms";
import Reservation from "./Reservation";
import CheckInPage from "./CheckInPage";
import CheckOutPage from "./CheckOutPage";
import ReservationPayment from "./ReservationPayment";
import "./App.css";

const Confirmation = ({ reservationDetails, onConfirm }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onConfirm();
    navigate("/payment");
  };

  return (
    <div className="confirmation-container">
      <h2>Reservation Summary</h2>
      <p>
        <strong>Check-In Date:</strong> {reservationDetails.checkInDate}
      </p>
      <p>
        <strong>Check-Out Date:</strong> {reservationDetails.checkOutDate}
      </p>
      <p>
        <strong>Guests:</strong> {reservationDetails.guests}
      </p>
      <p>
        <strong>Room Type:</strong> {reservationDetails.room.type}
      </p>
      <p>
        <strong>Price:</strong> {reservationDetails.room.price}
      </p>
      <button onClick={handleConfirm} className="confirm-button">
        Confirm Reservation
      </button>
    </div>
  );
};

const App = () => {
  const [reservationDetails, setReservationDetails] = useState(null);

  const handleRoomSelect = (room) => {
    setReservationDetails((prevDetails) => ({ ...prevDetails, room }));
  };

  const handleReservation = (details) => {
    setReservationDetails(details);
  };

  const handleConfirmation = () => {
    console.log("Reservation confirmed:", reservationDetails);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">HotelBooking</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onReservation={handleReservation} />}
          />
          <Route
            path="/rooms"
            element={<Rooms onSelectRoom={handleRoomSelect} />}
          />
          <Route path="/reservation" element={<Reservation />} />
          {/* Check-In Page */}
          <Route path="/check-in" element={<CheckInPage />} />
          {/* Check-Out Page */}
          <Route path="/check-out" element={<CheckOutPage />} />

          <Route path="/reservation-payment" element={<ReservationPayment />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2025 HotelBooking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
