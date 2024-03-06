import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <button className="menu-button">
            <FontAwesomeIcon icon={faBars} />
            <div className="menu-dropdown">
              <ul>
                <li>Courses</li>
                <li>Settings</li>
              </ul>
            </div>
          </button>
          <div className="login-button">
            <Link to="/LoginPage">
              <button>Login</button>
            </Link>
          </div>
        </header>
        <main>
          <div className="App-title">
            <h1 className="App-title1">Credit</h1>
            <h1 className="App-title2">Ledger</h1>
          </div>
          <h2 className="App-subtitle1">Track your progress with us</h2>
        </main>
        <footer>
          <p>© GDSC Waseda</p>
        </footer>
      </div>
  );
}

export default App;
