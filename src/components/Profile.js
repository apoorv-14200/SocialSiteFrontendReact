import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profile';
import { BoxesLoader } from 'react-awesome-loaders';
import {
  AddFriend,
  clear_friend_state,
  RemoveFriend,
} from '../actions/friends';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  handleAddfriend = () => {
    const userId = this.props.match.params.userId;
    this.props.dispatch(AddFriend(userId));
  };
  handleRemoveFriend = () => {
    const userId = this.props.match.params.userId;
    this.props.dispatch(RemoveFriend(userId));
  };
  componentDidMount() {
    if (this.props.match.params.userId) {
      this.props.dispatch(fetchProfile(this.props.match.params.userId));
    }
  }
  componentDidUpdate(prevProps) {
    const prevparam = prevProps.match.params;
    const curparam = this.props.match.params;
    if (curparam && prevparam && curparam.userId !== prevparam.userId) {
      this.props.dispatch(fetchProfile(curparam.userId));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(clear_friend_state());
  }
  checkIsUserFriend = () => {
    const userId = this.props.match.params.userId;
    const { user } = this.props.auth;
    const { friendships } = this.props.friends;
    let friendsuserids = [];
    friendships.map((friendship) => {
      let fid = friendship.from_user._id;
      if (fid == user._id) {
        fid = friendship.to_user._id;
      }
      friendsuserids.push(fid);
    });
    let indx = friendsuserids.indexOf(userId);
    if (indx !== -1) {
      return true;
    }
    return false;
  };
  render() {
    let isfriend = this.checkIsUserFriend();
    const profileuser = this.props.profile.user;
    const signeduser = this.props.auth.user;
    // console.log('PROFILE', this.props.location.aboutProps.post.user);
    const { error, inProgress } = this.props.profile;
    if (signeduser.email == profileuser.email) {
      return <Redirect to="/settings" />;
    }
    if (inProgress) {
      return (
        <div className="ploader">
          <BoxesLoader
            boxColor={'#6366F1'}
            style={{ marginBottom: '20px' }}
            desktopSize={'128px'}
            mobileSize={'80px'}
          />
        </div>
      );
    }
    if (error) {
      return <h1>{error}</h1>;
    }
    return (
      <div className="setting-container">
        <div className="user-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"></img>
        </div>
        {this.props.friends.error && (
          <div className="alert-dialog">{this.props.friends.error}</div>
        )}
        {this.props.friends.error == false && (
          <div className="success-dialog">
            Successfully {isfriend ? 'added' : 'removed'} friend
          </div>
        )}
        <div className="show-field">
          <div className="show-field-heading">Email</div>
          <div className="show-field-input">{profileuser.email}</div>
        </div>
        <div className="show-field">
          <div className="show-field-heading">Name</div>
          <div className="show-field-input">{profileuser.name}</div>
        </div>
        <div className="Button-container">
          {isfriend == false ? (
            <button
              className="add-friend-btn"
              disabled={this.props.friends.inProgress}
              onClick={this.handleAddfriend}
            >
              {this.props.friends.inProgress ? 'Adding Friend' : 'Add Friend'}
            </button>
          ) : (
            <button
              className="add-friend-btn"
              disabled={this.props.friends.inProgress}
              onClick={this.handleRemoveFriend}
            >
              {this.props.friends.inProgress
                ? 'Removing Friend'
                : 'Remove Friend'}
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
    profile: state.profile,
    friends: state.friends,
  };
}
export default connect(mapToState)(Profile);
