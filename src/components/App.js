import React, { Component } from 'react';
import { connect } from 'react-redux';
import posts from '../reducers/posts';
import { fetchposts } from '../actions/posts';
import PostsList from './PostsList';
import Navbar from './Navbar';

class App extends Component {
  componentDidMount() {
    console.log('hello props', this.props);
    this.props.dispatch(fetchposts());
  }
  render() {
    return (
      <div>
        <Navbar />
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

function maptostate(state) {
  return {
    posts: state.posts,
  };
}
// the below function basically provides the store context value available as props
//maptostate defines the attributes which are required by the component
export default connect(maptostate)(App);
