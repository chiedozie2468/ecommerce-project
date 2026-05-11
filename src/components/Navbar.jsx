import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>

        <div className="navbar-auth-links">
          <Link to="/auth" className="btn btn-secondary">
            Login
          </Link>

          <Link to="/auth" className="btn btn-primary">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}