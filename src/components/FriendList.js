import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { clear_friend_state, fetchFriends } from '../actions/friends';
import Friend from './Friend';

class FriendList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    this.props.dispatch(clear_friend_state());
  }
  componentDidMount() {
    this.props.dispatch(fetchFriends());
  }
  render() {
    const { friendships, inProgress, error } = this.props.friends;
    const signeduser = this.props.auth.user;
    if (inProgress) {
      return <h1>Fetching User Friends!</h1>;
    }
    if (error) {
      return <h1>{error}</h1>;
    }
    return (
      <div className="friends-container">
        <div className="friends-heading">Friends</div>
        {friendships.map((friendship) => {
          let friend = friendship.from_user;
          if (friend._id == signeduser._id) {
            friend = friendship.to_user;
          }
          return <Friend friend={friend} />;
        })}
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
    friends: state.friends,
  };
}

export default connect(mapToState)(FriendList);
