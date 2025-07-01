import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css"; // or "./Navbar.css" if you separate it

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/artificial" className={({ isActive }) => isActive ? "active" : ""}>AI Perspective</NavLink>
      <div
        className="dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="dropbtn">
          Projects
          <svg width="18" height="18" viewBox="0 0 20 20" style={{ verticalAlign: "middle", marginLeft: 6 }} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8l4 4 4-4" stroke="#222c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="dropdown-content" style={{ display: dropdownOpen ? "block" : "none" }}>
          <NavLink to="/turret">Turret</NavLink>
          <NavLink to="/model-rail">Model Rail</NavLink>
          <NavLink to="/website-project">Website Building</NavLink>
          <NavLink to="/project04">Future Project 04</NavLink>
          <NavLink to="/project05">Future Project 05</NavLink>
          <NavLink to="/project06">Future Project 06</NavLink>
          <NavLink to="/project07">Future Project 07</NavLink>
          <NavLink to="/project08">Future Project 08</NavLink>
          <NavLink to="/project09">Future Project 09</NavLink>
          <NavLink to="/project10">Future Project 10</NavLink>
        </div>
      </div>
    </nav>
  );
}