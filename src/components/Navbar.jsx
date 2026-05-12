import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>

        {!user ? (
          <div className="navbar-auth-links">
            <Link to="/auth" className="btn btn-secondary">
              Login
            </Link>

            <Link to="/auth" className="btn btn-primary">
              Signup
            </Link>
          </div>
        ) : (
          <div className="navbar-user">
            <span className="navbar-profile-display">Welcome, {user.email}</span>
            <button className="btn btn-secondary" onClick={logout}>
              Logout
            </button>
          </div>
        )}

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
