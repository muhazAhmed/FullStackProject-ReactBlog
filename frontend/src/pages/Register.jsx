import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>REGISTER</h1>
      <form>
        <input required type="text" placeholder="username"/>
        <input required type="email" placeholder="email"/>
        <input required type="password" placeholder="password"/>
        <button>Register</button>
        <p>Oops...Something went wrong!</p>
        <span>Aldready a member? <Link style={{textDecoration: "none", color : '#ff9899'}} to="/login">Login here</Link></span>
      </form>
    </div>
  )
}

export default Register
