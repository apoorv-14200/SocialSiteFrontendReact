import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

class Post extends Component {
  constructor(s) {
    super();
  }
  render() {
    const { post } = this.props;
    return (
      <div className="Post">
        <div className="user-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/560/560216.png"
            className="post-icon"
          ></img>
          <div className="post-user-name">
            {post.user.name}
            <div className="time">a minute ago</div>
          </div>
        </div>
        <p className="post-content">{post.content}</p>
        <div className="likes-comment-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"></img>
          <div className="likes-count">{post.likes.length}</div>
          <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"></img>
          <div className="comments-count">{post.comment.length}</div>
        </div>
        <div className="comments">
          <input
            className="comments-form"
            placeholder="Type your comment here"
          ></input>
          {post.comment.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
