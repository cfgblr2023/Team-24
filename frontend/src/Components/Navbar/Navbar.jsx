import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar-header">Marpu Foundation</div>
      <div className="navbar-controls">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><button>Home</button></Link>
        <Link to="/about-us" style={{ textDecoration: 'none', color: 'black' }}><button>About</button></Link>
        <Link to="/missions" style={{ textDecoration: 'none', color: 'black' }}><button>Missions</button></Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}><button>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
