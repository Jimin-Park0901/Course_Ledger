import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function WelcomePage() {
  let { email } = useParams();
  return (
    <div>
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
      <div className="center-container">
        <h1 className="App-title4"> Welcome {email} !</h1>
        <Link to="/courses">
          <button className="continue-btn">Go to Course → </button>
        </Link>
      </div>

      </main>
    </div>
  );
}

export default WelcomePage;