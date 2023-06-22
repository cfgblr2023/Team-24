import React from 'react'
import { useState } from 'react'
import "./Login.css"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Login({ setIsInternAuthenticated }) {
  const [loginView, setLoginView] = useState("admin");
  const [internData, setInternData] = useState({
      "ID": "",
      "pwd": "",
      "name": "",
      "email": "",
      "contact": "",
    })
    const [internState, setInternState] = useState("existing")
    const { loginWithRedirect } = useAuth0();
    const handleLogin = async (role) => {
      localStorage.setItem( 'auth-role', role );
      loginWithRedirect()
    }
  const handleInternForm = (e, entry) => {
    if(entry === "id") {
      setInternData({...internData, "ID": e.target.value})
    } else if(entry === "pwd") {
      setInternData({...internData, "pwd": e.target.value})
    } else if(entry === "name") {
      setInternData({...internData, "name": e.target.value})
    } else if(entry === "email") {
      setInternData({...internData, "email": e.target.value})
    } else if(entry === "contact") {
      setInternData({...internData, "contact": e.target.value})
    }
  }

  const registerIntern = async () => {
    await axios.post("http://127.0.0.1:5000/api/register-intern", internData)
    .then((res) => {
      if(res.data.register) {
        alert("Registration Successful! Proceed to login.")
        setInternState("existing")
      } else {
        alert("Please try to register again, there was an issue.")
      }
    })
    .catch((e) => alert(e))
    setInternData({
      "ID": "",
      "pwd": "",
      "name": "",
      "email": "",
      "contact": "",
    })
  }

  const loginIntern = async () => {
    if(internData.ID === "" || internData.pwd === "") {
      alert("Please enter valid data")
    } else {
      await axios.post("http://127.0.0.1:5000/api/login-intern", internData)
      .then(async (res) => {
        localStorage.setItem( 'auth-role', "intern" );
        await setIsInternAuthenticated(res.data.login);
        if(!res.data.login) alert("Kindly try logging in with correct credentials!")
        else alert("Login successful")

      })
      .catch((e) => alert(e))
    }
    setInternData({
      "ID": "",
      "pwd": "",
      "name": "",
      "email": "",
      "contact": "",
    })
  }

  return (
    <div className='login-main'>
        <div className='login-header'>Which role do you want to login for?</div>
        <div className='login-controls'>
            <div className='login-controls-button'>
              <button className='login-control-button' onClick={() => {setLoginView("admin"); handleLogin("admin")}}>Admin</button>
              <button className='login-control-button' onClick={() => setLoginView("intern")}>Intern</button>
            </div>
            {loginView === 'intern' && 
            <>
            <div className='intern-form'>
              <button onClick={() => setInternState("new")}>New User?</button>
              <button onClick={() => setInternState("existing")}>Existing User?</button>
              {internState === "existing" && 
              <>
                <label for="internID">Intern ID</label>
                <input id="internID" value={internData.ID} onChange={(e) => handleInternForm(e, "id")}></input>
                <label for="password">Password</label>
                <input id="password" value={internData.pwd} onChange={(e) => handleInternForm(e, "pwd")}></input>
                <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
                  <button onClick={() => loginIntern()}>Login</button>
                </Link>
              </>}
              {internState === "new" && 
              <>
                <label for="name">Name</label>
                <input id="name" value={internData.name} onChange={(e) => handleInternForm(e, "name")}></input>
                <label for="internID">Intern ID</label>
                <input id="internID" value={internData.ID} onChange={(e) => handleInternForm(e, "id")}></input>
                <label for="email">Email</label>
                <input id="email" value={internData.email} onChange={(e) => handleInternForm(e, "email")}></input>
                <label for="contact">Contact</label>
                <input id="contact" value={internData.contact} onChange={(e) => handleInternForm(e, "contact")}></input>
                <label for="password">Password</label>
                <input id="password" value={internData.pwd} onChange={(e) => handleInternForm(e, "pwd")}></input>
                <button onClick={() => {registerIntern();}}>Register</button>
              </>}
            </div>
            </>}
        </div>
    </div>
  )
}

export default Login