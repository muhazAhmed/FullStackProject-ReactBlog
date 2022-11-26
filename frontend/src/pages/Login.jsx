import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>LOGIN</h1>
      <form>
        <input required type="text" placeholder="username"/>
        <input required type="password" placeholder="password"/>
        <button>Login</button>
        <p>Oops...Something went wrong!</p>
        <span>New member? <Link style={{textDecoration: "none", color : '#ff9899'}} to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
