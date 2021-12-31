import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import CreatePost from './CreatePost';
import { fetchposts } from '../actions/posts';
import { BookLoader } from 'react-awesome-loaders';

class PostsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchposts());
  }
  render() {
    const { posts, error } = this.props.posts;
    const { isLoggedIn } = this.props.auth;
    if (posts.length == 0) {
      return (
        <BookLoader
          text="Fetching Posts..."
          background={'linear-gradient(135deg, #6066FA, #4645F6)'}
          desktopSize={'50px'}
          mobileSize={'50px'}
          textColor={'#4645F6'}
        />
      );
    }
    return (
      <div className="post-list1">
        {isLoggedIn && <CreatePost />}
        <div className={isLoggedIn ? 'Post-list' : 'Post-listN'}>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
    posts: state.posts,
  };
}
export default connect(mapToState)(PostsList);
