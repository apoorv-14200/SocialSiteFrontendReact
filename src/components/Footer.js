import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchposts } from '../actions/posts';

class Footer extends Component {
  handlenextclick = () => {
    const { next } = this.props.posts;
    this.props.dispatch(fetchposts(next.page));
  };
  handleprevclick = () => {
    const { prev } = this.props.posts;
    this.props.dispatch(fetchposts(prev.page));
  };
  render() {
    const { posts } = this.props.posts;
    const { next, prev } = this.props.posts;

    return (
      <div className="Footer-container">
        <div className="footer-btns">
          <button
            onClick={this.handleprevclick}
            className={prev ? 'fbtn' : 'fbtn hidebtn'}
          >
            &lt;
          </button>
          <button
            onClick={this.handlenextclick}
            className={next ? 'fbtn' : 'fbtn hidebtn'}
          >
            &gt;
          </button>
        </div>
        <div className="footer">&copy; 2021 Apoorv Jain</div>
      </div>
    );
  }
}

function mapTostate(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapTostate)(Footer);
