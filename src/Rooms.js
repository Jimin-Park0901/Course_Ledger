import React from "react";
import "./Rooms.css";

const rooms = [
  {
    type: "Standard Room",
    description: "A cozy room with all basic amenities.",
    image: "https://source.unsplash.com/400x300/?hotel,standard",
  },
  {
    type: "Deluxe Room",
    description: "Spacious room with a king-size bed and a city view.",
    image: "https://source.unsplash.com/400x300/?hotel,deluxe",
  },
  {
    type: "Suite",
    description: "Luxury suite with a living area and premium facilities.",
    image: "https://source.unsplash.com/400x300/?hotel,suite",
  },
  {
    type: "Family Room",
    description: "Large room suitable for families, with multiple beds.",
    image: "https://source.unsplash.com/400x300/?hotel,family",
  },
];

const Rooms = () => {
  return (
    <div className="rooms-container">
      <h2>Our Rooms</h2>
      <div className="room-list">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.type} />
            <h3>{room.type}</h3>
            <p>{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
