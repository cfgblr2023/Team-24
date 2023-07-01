import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate=useNavigate();

  const handleFund=()=>{
    Navigate('/fund')

  }
  return (
    <section className="pic">
      <div className="container d">
        <div className="row">
          <div className="col-12 m-auto text-center">
            <h1 className="main mt-5"><strong>Lamp Lighters</strong></h1>
            <h2 className="para text me-0" style={{ color: "white" }}>
              <strong>Where Education Meets The Poor!!</strong>
            </h2>
          </div>
          <hr className="mx-auto w-50" />
          <div className="col-12 mt-5 text-center">
            <h1 className="para1">
              <strong><h2>We provide education for dropouts, poor, women</h2></strong>
            </h1>
          </div>
          <div className="row mt-3 justify-content-center">
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-outline-info w-100 h-100 border-0"
                onClick={handleFund}
                //
              >
                <h3 className="para m-auto text-decoration-underline">
                  <strong>Fund Raiser</strong>
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
