import React from 'react'
import './Newbar.css'
import { Link } from 'react-router-dom'


export const Newbar = () => {
  return (
    <div className="nav-wrapper2">
      <Link to="/planner" className="brand-logo-new"><img src='images/logo.svg' alt='logo' className='logo-picture' /></Link>
      <ul className='bar2'>
        <li>HOW IT WORKS</li>
        <li>ABOUT US</li>
        <li>FAQ</li>
        <li>CONTACT</li>
        <Link to={'/signup'}><button className="signup">SIGN UP</button></Link>
        <Link to={'/login'}><button className="login1">LOGIN</button></Link>
      </ul>
    </div>
  )
}
