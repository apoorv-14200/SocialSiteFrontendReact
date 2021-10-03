import React, { Component } from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/auth';

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logout());
  };
  render() {
    const { isLoggedIn, user } = this.props.auth;
    return (
      <div className="navbar">
        <div className="nav-left-container">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2065/2065203.png"
              className="logo"
            ></img>
          </Link>
          <div className="site-name">Socializer</div>
        </div>
        <div className="nav-middle-container">
          <div className="search">
            <input placeholder="Search name"></input>
            <div className="search-results">
              <SearchResult />
              <SearchResult />
            </div>
          </div>
          <button className="search-btn">Search</button>
        </div>
        <div className="nav-right-container">
          {isLoggedIn && (
            <div className="user-nav">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                className="user-logo"
              ></img>
              <div className="username-nav">{user.name}</div>
            </div>
          )}
          {isLoggedIn == false && (
            <Link className="nav-btn" to="/login">
              <div>LogIn</div>
            </Link>
          )}
          {isLoggedIn && <button onClick={this.logOut}>LogOut</button>}
          {isLoggedIn == false && (
            <Link className="nav-btn" to="Register">
              <div>Register</div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapToState)(Navbar);
