/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './StudentLogin.css'
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const handleRedirectStudentLogin = () => {
    Navigate("/learning-portal");
  };
  return (
    <div className="login-box">
 
  <form>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label htmlFor='usernmae'>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""/>
      <label htmlFor='password'>Password</label>
    </div><center>
    <a href="http://localhost:3000/learning-portal">
           SEND
       <span></span>
    </a></center>
  </form>
</div>
  )
}

export default StudentLogin