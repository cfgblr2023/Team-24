/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";

function Student_offline() {
  const [classes, setClasses] = useState([]);
  const fetchClass = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/get-offline-classes")
      .then((response) => {
        console.log(response.data);
        setClasses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchClass();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {classes.map((c, index) => {
          return (
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name of Volunteer:{c.name}</h5>
                <p className="card-text">
                  Course:{c.course}
                  Location:{c.location}
                </p>

                <a href="#" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Student_offline;
