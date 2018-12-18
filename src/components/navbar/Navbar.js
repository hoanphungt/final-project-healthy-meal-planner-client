import React, { Component } from 'react'
import './Navbar.css'
import { connect } from 'react-redux';
import { Newbar } from './Newbar';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.user === null && <Newbar />}
        {this.props.user !== null && <div>
          <nav className="nav-wrapper1">
            <a href="/planner" className="brand-logo"><i className="material-icons">restaurant_menu</i>MealPlanner</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li> <Link to={'/planner'}>WEEKLY PLANNER</Link></li>
              <li> <Link to={'/recipes'}>SEARCH</Link></li>
              <li> <Link to={'/'}>FAVORITES</Link></li>
              <li> <Link to={'/'}>CREATE YOUR OWN</Link></li>
              <li><a href="/blog">BLOG</a></li>
              <li> <Link to={'/shopping-list'}>SHOPPING LIST</Link></li>
              {/* <button onClick={() => history.push('/login')}>Login</button>
                <button onClick={() => history.push('/signup')}>Sign up</button> */}
            </ul>
            <input className="search-box" type="box" placeholder="SEARCHBAR" />
            <button className="search-button">Search</button>
          </nav>
        </div>}
      </div>



    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(Navbar)



