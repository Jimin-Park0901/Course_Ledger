const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Sample reservation data
const reservations = [
  { reservationNumber: "12345", roomNumber: "101" },
  { reservationNumber: "67890", roomNumber: "102" },
  { reservationNumber: "54321", roomNumber: "103" },
];

app.use(cors({
  origin: "http://localhost:3000", // Replace with the frontend origin
}));

app.use(express.json());

// Endpoint to fetch room number by reservation number
app.get("/api/reservations/:reservationNumber", (req, res) => {
  const { reservationNumber } = req.params;
  const reservation = reservations.find(
    (r) => r.reservationNumber.toLowerCase() === reservationNumber.toLowerCase()
  );

  if (reservation) {
    res.json({ success: true, roomNumber: reservation.roomNumber });
  } else {
    res.json({ success: false, message: "Reservation not found." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/api/reservations/:reservationNumber", (req, res) => {
    const { reservationNumber } = req.params;
    console.log(`Incoming request for reservation: ${reservationNumber}`); // Debugging
  
    const reservation = reservations.find(
      (r) => r.reservationNumber.toLowerCase() === reservationNumber.toLowerCase()
    );
  
    if (reservation) {
      console.log(`Reservation found: Room number ${reservation.roomNumber}`);
      res.json({ success: true, roomNumber: reservation.roomNumber });
    } else {
      console.log(`Reservation not found for: ${reservationNumber}`);
      res.json({ success: false, message: "Reservation not found." });
    }
  });
  