/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import React from "react";

const Student_offline = () => {
  const items = [
    {
      name: "lagan",
      email: "lag@gmail.com",
      course: "course1",
      location: "location",
    },
    {
      name: "avavsva",
      email: "avvvv@gmail.com",
      course: "course2",
      location: "locatiadvadvdavon",
    },
  ];

  //   useEffect(() => {
  //     axios
  //       .get("")
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => {
          return (
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">Name of Volunteer:{item.name}</h5>
                <p className="card-text">
                  Course:{item.course}
                  Location:{item.location}
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
};

export default Student_offline;
