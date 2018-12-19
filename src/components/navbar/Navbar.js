import React, { Component } from 'react'
import './Navbar.css'
import { connect } from 'react-redux';
import { Newbar } from './Newbar';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        {this.props.user === null && <Newbar />}
        {this.props.user !== null &&
          <div className="nav-wrapper1">
            <Link to="/planner" className="brand-logo"><img src='images/logo.svg' alt='logo' className='logo-pic' /></Link>
            <ul className='bar'>
              <li><Link to='/planner'>WEEKLY PLANNER</Link></li>
              <li><Link to='/recipes'>SEARCH</Link></li>
              <li><Link to='/favorites'>FAVORITES</Link></li>
              <li><Link to='/favorites'>CREATE YOUR OWN</Link></li>
              <li><Link to='/favorites'>BLOG</Link></li>
              <li> <Link to='/shopping-list'><img src='images/shoppinglist.svg' alt='shopping-list' /></Link></li>
              <li><div className='logout-container'><Link to='/logout'><img src='images/LogoutAvatar.svg' alt='avatar' className='logout-avatar'/></Link></div></li>
            </ul>
            <input className="search-box" type="box" placeholder="SEARCHBAR" />
            <button className="search-button">Search</button>
          </div>
        }
      </div>

    );
  }
}


const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(Navbar)



