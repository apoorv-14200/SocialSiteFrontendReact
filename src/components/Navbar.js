import React, { Component } from 'react';
import SearchResult from './SearchResult';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
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
          <div className="user-nav">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
              className="user-logo"
            ></img>
            <div className="username-nav">Apoorv</div>
          </div>
          <Link className="nav-btn" to="/login">
            <div>LogIn</div>
          </Link>
          <Link className="nav-btn" to="/logout">
            <div>LogOut</div>
          </Link>
          <Link className="nav-btn" to="Register">
            <div>Register</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
