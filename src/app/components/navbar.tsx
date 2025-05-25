"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Nisarg Patel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "home" ? "active" : ""
                }`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "projects" ? "active" : ""
                }`}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "contact" ? "active" : ""
                }`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
