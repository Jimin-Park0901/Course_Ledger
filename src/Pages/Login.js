import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

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
        <h1 className="App-subtitle2">Credit Ledger</h1>
      </header>
      <main>
        <h1 className="App-title3">Login</h1>
        <div className="center-container">
          <button className="continue-btn">Continue with Google</button>
          <hr className="divider" />
          <div>
            <input
              type="email"
              className="email-input"
              placeholder="Enter email address"
              value={email}
              onChange={handleChange}
            />
            <Link to={`/welcome/${email}`} className="continue-email-link">
              <p className="continue-email-btn">Continue with Email</p>
            </Link>
          </div>
        </div> 
      </main>
      <footer>
        <p>© GDSC Waseda</p>
      </footer>
    </div>
  );
}

export default LoginPage;
