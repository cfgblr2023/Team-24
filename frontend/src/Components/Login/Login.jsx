import React from 'react'
import "./Login.css"
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();
    const handleLogin = async (role) => {
      localStorage.setItem( 'auth-role', role );
      loginWithRedirect()
    }
  return (
    <div className='login-main'>
        <div className='login-header'>Which role do you want to login for?</div>
        <div className='login-controls'>
            <button className='login-control-button' onClick={() => handleLogin("admin")}>Admin</button>
            <button className='login-control-button' onClick={() => handleLogin("intern")}>Intern</button>
        </div>
    </div>
  )
}

export default Login