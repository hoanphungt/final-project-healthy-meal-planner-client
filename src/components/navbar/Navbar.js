import React from 'react'
import { withRouter } from 'react-router'
// import { userId } from '../jwt'
import { connect } from 'react-redux'
import './Navbar.css'


const NavBar = (props) => {
  // const { history } = props
  return (
    <div>
      <nav>
        <div className="nav-wrapper1">
          <a href="/planner" className="brand-logo"><i className="material-icons">restaurant_menu</i>MealPlanner</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/planner">YOUR WEEKLY PLANNER</a></li>
            <li><a href="/recipes">SEARCH</a></li>
            <li><a href="/favorites">FAVORITES</a></li>
            <li><a href="/create">CREATE YOUR OWN</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/shopping-list">SHOPPING LIST</a></li>
            {/* <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/signup')}>Sign up</button> */}
            
          </ul>
          <input className="search-box" type="box" placeholder="SEARCHBAR"/>
                    <button className ="search-button">Search</button> 
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