import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLike } from '../actions/likes';

class Comment extends Component {
  handleToggleLike = () => {
    const { comment } = this.props;
    this.props.dispatch(toggleLike(comment._id, 'Comment'));
  };
  isLikedByUser = () => {
    const { comment } = this.props;
    const { user } = this.props.auth;
    let i;
    for (i = 0; i < comment.likes.length; i++) {
      if (comment.likes[i].user == user._id) {
        return true;
      }
    }
    return false;
  };
  render() {
    let liked = this.isLikedByUser();
    console.log(liked);
    const { comment } = this.props;
    return (
      <div className="comment">
        <div className="name-time">{comment.user.name} a minute ago</div>
        <div className="comment-content">{comment.content}</div>
        <div className="comment-likes-count">
          <img
            onClick={this.handleToggleLike}
            src={
              liked
                ? 'https://cdn-icons-png.flaticon.com/512/633/633991.png'
                : 'https://cdn-icons-png.flaticon.com/512/633/633759.png'
            }
          ></img>
          {comment.likes.length}
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
export default connect(mapToState)(Comment);
