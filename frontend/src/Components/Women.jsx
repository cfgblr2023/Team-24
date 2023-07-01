/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./hey.css";

const Women = () => {
  return (
    <section className=".wo READ STORY">
      <div className="container d-flex justify-content-center">
        <div className="row g-5">
          <div className="col-6">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.womenentrepreneursindia.com/assets/images/success-stories/srividhya-ss.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Srividhya Seshadri</h5>
                <p className="card-text">
                  Jwala corpserv Business Advisory Services
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.womenentrepreneursindia.com/assets/images/success-stories/sankari-ss.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Sankari Mohanraj</h5>
                <p className="card-text">
                  Grand Moss Electric Bike Electric Vehicles Dealer
                </p>
                <a href="#" className="btn btn-primary">
                  READ STORY
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.womenentrepreneursindia.com/assets/images/success-stories/anuradha-ss.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Anuradha Halan</h5>
                <p className="card-text">
                  Evam Toda embroidery Toda Tribal Products
                </p>
                <a href="#" className="btn btn-primary">
                  READ STORY
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://www.womenentrepreneursindia.com/assets/images/success-stories/sunita-ss.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Vysetty Sunitha Rani</h5>
                <p className="card-text">
                  Just Green Leaf Jute Bag Manufacturer, Hyderabad
                </p>
                <a href="#" className="btn btn-primary">
                  READ STORY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Women;
