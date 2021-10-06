import { func } from 'prop-types';
import React, { Component } from 'react';
import FriendList from './FriendList';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { fetchposts } from '../actions/posts';

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props.auth;
    console.log('props', this.props);
    return (
      <div className="home">
        <PostsList />
        {isLoggedIn && <FriendList />}
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapToState)(Home);
