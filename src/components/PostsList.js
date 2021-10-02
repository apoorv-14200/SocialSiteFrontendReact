import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div className="Post-list">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: propTypes.array.isRequired,
};
export default PostsList;
