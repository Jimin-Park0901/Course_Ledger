import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import hotelImage1 from './assets/hotel_lobby.jpeg';
import hotelImage3 from './assets/hotel_inside1.jpeg';
import hotelImage4 from './assets/hotel_inside2.jpeg';

const Home = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  // Image Carousel State
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    hotelImage1,
    hotelImage3,
    hotelImage4
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    navigate("/rooms", {
      state: {
        checkInDate,
        checkOutDate,
        guests,
      },
    });
  };

  return (
    <div className="home-container">
      {/* Image Carousel */}
      <div className="image-carousel">
        <img src={images[currentImage]} alt="Hotel" className="carousel-image" />
      </div>

      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label>
            <FaCalendarAlt /> Check-In Date
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <FaCalendarAlt /> Check-Out Date
          </label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <FaUser /> Guests
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default Home;
