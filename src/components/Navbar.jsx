import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import resumePDF from "../assets/resume.pdf";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="suresh-header">
      <div className="header-content">

        {/* LEFT – LOGO */}
        <div className="logo">SURESH PARMAR</div>

        {/* CENTER – NAV MENU */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul>

            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-house-door"></i> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-person"></i> About
              </NavLink>
            </li>

            <li>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <i className="bi bi-file-earmark-text"></i> Resume
              </a>
            </li>

            <li>
              <NavLink
                to="/skills"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-lightning-charge"></i> Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-grid"></i> Projects
              </NavLink>
            </li>

             <li>
              <NavLink
                to="/Certificates"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-grid"></i> Certificates
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="bi bi-envelope"></i> Contact
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="bi bi-list"></i>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
