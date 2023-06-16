import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='login-main'>
        <div className='login-header'>Which role do you want to login for?</div>
        <div className='login-controls'>
            <button className='login-control-button'>Admin</button>
            <button className='login-control-button'>Intern</button>
        </div>
    </div>
  )
}

export default Login