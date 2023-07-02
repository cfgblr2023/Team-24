import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./FundRaiser.css";
const FundRaiser = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [money, setMoney] = useState("");

  const handlePay = (e) => {
    e.preventDefault();
    if (money === 0) {
      alert("MACHA BUY SOMETHING FIRST");
      Navigate("/cart");
    } else {
      var options = {
        key: "",
        key_secret: "",
        amount: money * 100,
        currency: "INR",
        name: name,
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "bro",
          email: name,
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
      Navigate("/home");
    }
  };
  return (
    <section className="fundpic">
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row ">
          <h1 style={{color:"white"}}>Fund Raiser</h1>
          <div className="col mt-5">
            <div className="form-floating mb-3" >
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="floatingInput"> Name</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="floatingText"
                placeholder="text"
                onChange={(e) => {
                  setMoney(e.target.value);
                }}
              />
              <label htmlFor="floatingPassword">Money</label>
            </div>
            <div className="mt-5">
            <button type="button" className="btn btn-success " onClick={handlePay}>Donate</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundRaiser;
