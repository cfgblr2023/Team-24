/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './StudentLogin.css'

const StudentLogin = () => {
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
    <a href="#">
           SEND
       <span></span>
    </a></center>
  </form>
</div>
  )
}

export default StudentLogin