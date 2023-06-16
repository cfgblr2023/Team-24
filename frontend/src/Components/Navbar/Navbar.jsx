import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-main">
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><div className="navbar-header">Marpu Foundation</div></Link>
      <div className="navbar-controls">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><button className='nav-controls-btns'>Home</button></Link>
        <Link to="/about-us" style={{ textDecoration: 'none', color: 'black' }}><button className='nav-controls-btns'>About</button></Link>
        <Link to="/missions" style={{ textDecoration: 'none', color: 'black' }}><button className='nav-controls-btns'>Missions</button></Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}><button className='nav-controls-btns'>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
