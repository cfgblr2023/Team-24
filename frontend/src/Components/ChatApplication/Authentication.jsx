import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";



const Authentication = () => {
  const [text, setText] = useState("");
  
  const Navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    

    axios
      .put(
        "https://api.chatengine.io/users/",
        {
          username: text,
          secret: text,
        },
        {
          headers: {
            "Private-Key": " ",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        Navigate("/chats");
      })
      .catch((err) => console.log(err));
    setText("");
  };
  return (
    <div className="container mt-5">
      <div className="login-box">
        <form className="form " onSubmit={handleSubmit}>
          <p className="heading">LOGIN</p>
          <div className="row d-flex justify-content-center">
          <input placeholder="Username" className="input" type="text" value={text} onChange={(e)=>{
            setText(e.target.value);
          }}/>

          </div>
          
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
