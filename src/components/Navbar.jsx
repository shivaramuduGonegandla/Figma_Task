import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Search Input */}
        <input
          type="text"
          className="search-input"
          placeholder="Chat/Feed chat"
        />
      </div>
      <div className="navbar-right">
        {/* Home Icon */}
        <button className="navbar-icon-btn home-btn">
          <FontAwesomeIcon icon={faHome} className="navbar-icon" />
        </button>

        <button className="navbar-btn">Process Owner HOD</button>
        <button className="navbar-btn1">Admin</button>
        <div className="user-info">
          <img
            src="src/assets/images/profile-pic.png" // Replace with Palak Bansal's image URL
            alt="Palak Bansal"
            className="user-img"
          />
          <span className="user-name">Palak Bansal</span>
        </div>
        
        <FontAwesomeIcon icon={faCog} className="navbar-icon" title="Settings" />
        <button className="navbar-logout">
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
