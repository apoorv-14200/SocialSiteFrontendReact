import React, { Component } from 'react';
import SearchResult from './SearchResult';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-left-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2065/2065203.png"
            className="logo"
          ></img>
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
          <div className="nav-btn">LogIn</div>
          <div className="nav-btn">LogOut</div>
          <div className="nav-btn">Register</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
