import React from 'react'
import './Newbar.css'
import { Link } from 'react-router-dom'


export const Newbar = () => {

    return (
            <nav className="nav-wrapper2">
              <ul>
                <li className="nav"><a href="url">HOW IT WORKS</a></li>
                <li className="nav"><a href="url">ABOUT US</a></li>
                <li className="nav"><a href="url">FAQ</a></li>
                <li className="nav"><a href="url">CONTACT</a></li>
                <button className="signup"><Link to={'/signup'}>SIGN UP</Link></button>
                <button className="login1"><Link to ={'/login'}>LOGIN</Link></button>
              </ul>
              
            </nav>
      )
    }

