import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createComment } from '../actions/comment';
import { toggleLike } from '../actions/likes';
import Comment from './Comment';

class Post extends Component {
  constructor(s) {
    super();
    this.state = {
      content: '',
    };
  }
  handleChange = (e) => {
    let content = e.target.value;
    this.setState({
      content: content,
    });
  };
  handleAddcomment = (e) => {
    const { post } = this.props;
    if (this.state.content !== '' && e.key == 'Enter') {
      this.props.dispatch(createComment(this.state.content, post._id));
      this.setState({
        content: '',
      });
    }
  };
  handleToggleLike = () => {
    const { post } = this.props;
    this.props.dispatch(toggleLike(post._id, 'Post'));
  };
  isLikedByUser = () => {
    const { post } = this.props;
    const { user } = this.props.auth;
    let i;
    for (i = 0; i < post.likes.length; i++) {
      if (post.likes[i].user == user._id) {
        return true;
      }
    }
    return false;
  };
  render() {
    const { post } = this.props;
    let liked = this.isLikedByUser();
    console.log('LIKED', liked);
    return (
      <div className="Post">
        <div className="user-info">
          <Link to={`/SocialSiteFrontendReact/user/${post.user._id}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/560/560216.png"
              className="post-icon"
            ></img>
          </Link>
          <div className="post-user-name">
            {post.user.name}
            <div className="time">a minute ago</div>
          </div>
        </div>
        <p className="post-content">{post.content}</p>
        <div className="likes-comment-icon">
          <img
            onClick={this.handleToggleLike}
            src={
              liked
                ? 'https://cdn-icons-png.flaticon.com/512/1076/1076984.png'
                : 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'
            }
          ></img>
          <div className="likes-count">{post.likes.length}</div>
          <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"></img>
          <div className="comments-count">{post.comment.length}</div>
        </div>
        <div className="comments">
          <input
            onChange={this.handleChange}
            onKeyPress={this.handleAddcomment}
            onk
            className="comments-form"
            placeholder="Type your comment here"
          ></input>
          {post.comment.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))}
        </div>
      </div>
    );
  }
}

function mapTostate(state) {
  return {
    auth: state.auth,
    posts: state.posts,
  };
}
export default connect(mapTostate)(Post);
