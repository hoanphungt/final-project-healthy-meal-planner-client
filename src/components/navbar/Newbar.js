import React from 'react'
import './Newbar.css'
import { Link } from 'react-router-dom'


export const Newbar = () => {

    return (
            <nav className="nav-wrapper2">
              <ul>
                <Link to="/planner" className="brand-logo"><img src='images/logo.svg' alt='logo' className='logo-pic' /></Link>

                <li className="nav">HOW IT WORKS</li>
                <li className="nav">ABOUT US</li>
                <li className="nav">FAQ</li>
                <li className="nav">CONTACT</li>
                <button className="signup"><Link to={'/signup'}>SIGN UP</Link></button>
                <button className="login1"><Link to ={'/login'}>LOGIN</Link></button>
              </ul>
              
            </nav>
      )
    }

