import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

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
        name: "LAGBAY",
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
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handlePay}>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="Money">
              <input
                type="text"
                placeholder="Money"
                onChange={(e) => {
                  setMoney(e.target.value);
                }}
              />
            </label>
            <button>DOnate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FundRaiser;
