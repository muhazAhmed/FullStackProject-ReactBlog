import React from 'react'
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
        <img src={Logo} alt='logo'/>
        <span>
            Made with <b>React.JS</b> by <b>MUHAZ</b>
        </span>
    </footer>
  )
}

export default Footer
