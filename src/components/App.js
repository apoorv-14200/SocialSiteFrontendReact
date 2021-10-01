import React, { Component } from 'react';
import { connect } from 'react-redux';
import posts from '../reducers/posts';

class App extends Component {
  render() {
    console.log(this.props);
    return <div>APP</div>;
  }
}

function maptostate(state) {
  return {
    posts: state.posts,
  };
}
export default connect(maptostate)(App);
