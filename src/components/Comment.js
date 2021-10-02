import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <div className="name-time">{comment.user.name} a minute ago</div>
        <div className="comment-content">{comment.content}</div>
        <div className="comment-likes-count">
          <img src="https://cdn-icons-png.flaticon.com/512/633/633759.png"></img>
          {comment.likes.length}
        </div>
      </div>
    );
  }
}

export default Comment;
