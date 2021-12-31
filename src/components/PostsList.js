import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import CreatePost from './CreatePost';
import { fetchposts } from '../actions/posts';

class PostsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchposts());
  }
  render() {
    const { posts, error } = this.props.posts;
    const { isLoggedIn } = this.props.auth;
    console.log('PostList RENDERED');
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