import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleFund = () => {
    navigate("/fund");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  const handleStudent = () => {
    navigate("/studentLogin");
  };

  const handleVolunteer = () => {
    window.open("http://127.0.0.1:4000/", "_blank");
    //navigate("/volunteer");
  };

  return (
    <section className="pic">
      <div className="container d">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 m-auto text-center">
            <h1 className="main mt-5">
              <strong>Lamp Lighters</strong>
            </h1>
            <h2 className="para text me-0" style={{ color: "white" }}>
              <strong>Where Education Meets The Poor!!</strong>
            </h2>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-info mx-2"
              onClick={handleAdmin}
            >
              Admin
            </button>
            <button
              type="button"
              className="btn btn-outline-info mx-2"
              onClick={handleStudent}
            >
              Student
            </button>
            <button
              type="button"
              className="btn btn-outline-info mx-2"
              onClick={handleVolunteer}
            >
              Volunteer
            </button>
          </div>

        </div >
        <hr className="mx-auto w-50" />
        <div className="row mt-5 text-center">
          <div className="col-12">
            <h1 className="para1" style={{color:"white"}}>
              <strong>We provide education for dropouts, poor, women</strong>
            </h1>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-outline-info w-100 h-100 border-0"
              onClick={handleFund} 
              style={{borderColor:"white",border:"5px"}}
            >
              <h3 className="para m-auto text-decoration-underline" style={{color:"white"}}>
                <strong>Fund Raiser</strong>
              </h3>
            </button>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Home;