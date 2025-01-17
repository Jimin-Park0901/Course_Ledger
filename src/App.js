import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Rooms from "./Rooms";
import "./App.css";

const App = () => {
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
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2025 HotelBooking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
