import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="navbar-main">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="navbar-header">Marpu Foundation</div>
      </Link>
      <div className="navbar-controls">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <button className="nav-controls-btns">Home</button>
        </Link>
        <Link to="/about-us" style={{ textDecoration: "none", color: "black" }}>
          <button className="nav-controls-btns">About</button>
        </Link>
        <Link to="/missions" style={{ textDecoration: "none", color: "black" }}>
          <button className="nav-controls-btns">Missions</button>
        </Link>
        <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
          <button className="nav-controls-btns">Dashboard</button>
        </Link>
        {isAuthenticated ? <button className="nav-controls-btns" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
        :
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <button className="nav-controls-btns">Login</button>
        </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
