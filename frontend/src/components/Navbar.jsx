/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const handleChats = () => {
    Navigate("/authentication");
  };
  const handleSpeech = () => {
    Navigate("/speech");
  };
  const handleAdmin=()=>{
    Navigate('/admin')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container ">
        <a className="navbar-brand" href="/home">
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
            <li className="nav-item  d-flex align-items-center">
              <button
                type="button"
                className="btn btn-success "
                onClick={handleSpeech}
              >
                MIC
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                <h1>Home</h1>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <h1>About</h1>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <h1>Contact</h1>
              </a>
            </li>

            <select
              className="border-0"
              style={{ background: "transparent", border: 0 }}
            >
              <option style={{ background: "transparent", border: 0 }}>
                {" "}
                Login
              </option>
              <option>Volunteer</option>
              <option><button onClick={handleAdmin}>Admin</button></option>
              <option>Student</option>
            </select>
            {/* <li className="nav-item dropdown d-flex align-items-center">
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
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
