import React from 'react'
import { withRouter } from 'react-router'
// import { userId } from '../jwt'
import { connect } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

  // const { history } = props
  return (
    <div>
      <nav>
        <div className="nav-wrapper1">
          <Link to="/planner" className="brand-logo"><img src='images/logo.svg' alt='logo' className='logo-pic' /></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/planner'}>WEEKLY PLANNER</Link></li>
            <li><Link to={'/recipes'}>SEARCH</Link></li>
            <li><Link to={'/favorites'}>FAVORITES</Link></li>
            <li><Link to={'/favorites'}>CREATE YOUR OWN</Link></li>
            <li><Link to={'/favorites'}>BLOG</Link></li>
            <li> <Link to={'/shopping-list'}><img src='images/shoppinglist.svg' alt='shopping-list' /></Link></li>
            <li><img src='images/Avatar.svg' alt='avatar' /></li>
            {/* <button onClick={() => history.push('/login')}>Login</button>
    
            <button onClick={() => history.push('/signup')}>Sign up</button> */}
          </ul>
          <input className="search-box" type="box" placeholder="SEARCHBAR" />
          <button className="search-button">Search</button>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  /* user: state.currentUser && state.users &&
    // state.users[userId(state.currentUser.jwt
    )] */
})

export default withRouter(
  connect(mapStateToProps)(NavBar)
)