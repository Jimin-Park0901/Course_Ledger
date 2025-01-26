import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Rooms.css";

import standard from "./assets/hotel_inside1.jpeg";
import deluxe from "./assets/hotel_inside2.jpeg";
import suite from "./assets/hotel_inside3.jpeg";
import family from "./assets/hotel_inside4.jpeg";

const rooms = [
  {
    type: "Standard Room",
    description: "A cozy room with all essential basic amenities.",
    image: standard,
    price: "$100 per night",
  },
  {
    type: "Deluxe Room",
    description: "Spacious room with a king-size bed and a city view.",
    image: deluxe,
    price: "$150 per night",
  },
  {
    type: "Suite",
    description: "Luxury suite with a living area and premium facilities.",
    image: suite,
    price: "$250 per night",
  },
  {
    type: "Family Room",
    description: "Large room suitable for families, with multiple beds.",
    image: family,
    price: "$200 per night",
    minGuests: 4, // 최소 인원 조건 추가
  },
];

const Rooms = ({ onSelectRoom }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { checkInDate, checkOutDate, guests } = state;

  const handleRoomSelect = (room) => {
    if (room.type === "Family Room" && guests < (room.minGuests || 0)) {
      return; // 선택 불가한 경우 클릭 무시
    }
    onSelectRoom(room);
    navigate("/reservation-payment", {
      state: {
        checkInDate,
        checkOutDate,
        guests,
        roomType: room.type,
      },
    });
  };

  return (
    <div className="rooms-container">
      <h2>Available Rooms</h2>
      <div className="reservation-details">
        <p>
          <strong>Check-In Date:</strong> {checkInDate}
        </p>
        <p>
          <strong>Check-Out Date:</strong> {checkOutDate}
        </p>
        <p>
          <strong>Guests:</strong> {guests}
        </p>
      </div>
      <div className="room-list">
        {rooms.map((room, index) => {
          const isFamilyRoom = room.type === "Family Room";
          const isDisabled = isFamilyRoom && guests < (room.minGuests || 0);

          return (
            <div
              key={index}
              className={`room-card ${isDisabled ? "disabled" : ""}`}
              onClick={() => handleRoomSelect(room)}
            >
              <img src={room.image} alt={room.type} />
              <h3>{room.type}</h3>
              <p>{room.description}</p>
              <p>
                <strong>{room.price}</strong>
              </p>
              {isDisabled && (
                <p className="unavailable-text">
                  Not available for less than 4 guests
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
