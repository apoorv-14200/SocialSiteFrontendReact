import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_content: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      post_content: e.target.value,
    });
  };
  handleSubmit = () => {
    let content = this.state.post_content;
    this.props.dispatch(createPost(content));
  };
  render() {
    const { error } = this.props.posts;
    return (
      <div className="post-form-container">
        {error == false && (
          <div className="success-dialog">Post Created Successfully</div>
        )}
        {error && <div className="alert-dialog">{error}</div>}
        <div className="post-input-container">
          <textarea
            onChange={(e) => this.handleChange(e)}
            placeholder="What's in your mind?"
          ></textarea>
        </div>
        <div className="post-btn-container">
          <div onClick={this.handleSubmit} className="post-btn">
            Add Post
          </div>
        </div>
      </div>
    );
  }
}

function mapToState(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapToState)(CreatePost);
