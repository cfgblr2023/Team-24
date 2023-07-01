/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate=useNavigate();
  

  const handleChats=()=>{
    Navigate('/authentication')
   
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container ">
        <a className="navbar-brand" href="#">
          <h1> Lamp Lighters</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex a"
          id="navbarNavDropdown "
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  d-flex align-items-center">
              <button
                type="button"
                className="btn btn-success "
                onClick={handleChats}
              >
                Chats
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <h1>Home</h1>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h1>About</h1>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h1>FundRaiser</h1>
              </a>
            </li>
            <li className="nav-item dropdown d-flex align-items-center">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5>Login</h5>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Admin
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Student{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
