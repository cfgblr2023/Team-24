
import React, { useState } from "react";

const Volunteer_offline = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, number, location, course, date);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <h1>Offline volunteering</h1>
        <div className="col">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onClick={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="name"
              className="form-control"
              id="floatingPassword"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Contact Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Location</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="course"
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Course name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="date and time"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label htmlFor="floatingInput"> Date and time</label>
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer_offline;
