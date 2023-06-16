import React from 'react'
import "./Login.css"
import { useAuth0 } from "@auth0/auth0-react";

function Login({ setRole }) {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className='login-main'>
        <div className='login-header'>Which role do you want to login for?</div>
        <div className='login-controls'>
            <button className='login-control-button' onClick={() => {setRole("admin"); loginWithRedirect()}}>Admin</button>
            <button className='login-control-button' onClick={() => {setRole("intern"); loginWithRedirect()}}>Intern</button>
        </div>
    </div>
  )
}

export default Login