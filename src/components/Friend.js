import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Friend extends Component {
  render() {
    const { friend } = this.props;
    return (
      <div className="friend">
        <div className="friend-icon">
          <Link to={`/user/${friend._id}`}>
            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"></img>
          </Link>
        </div>
        <div className="friend-name">
          <div>{friend.name}</div>
        </div>
      </div>
    );
  }
}

export default Friend;
