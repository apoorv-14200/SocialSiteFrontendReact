import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { clear_friend_state, fetchFriends } from '../actions/friends';
import Friend from './Friend';
import { WifiLoader } from 'react-awesome-loaders';

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
      return (
        <WifiLoader
          className="loader"
          background={'transparent'}
          backColor={'rgb(66, 110, 240)'}
          desktopSize={'90px'}
          mobileSize={'90px'}
          text={'Fetching Friends...'}
          backColor="rgb(66, 110, 240)"
          frontColor="#4645F6"
        />
      );
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
