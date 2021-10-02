import React, { Component } from 'react';
import { connect } from 'react-redux';
import posts from '../reducers/posts';
import { fetchposts } from '../actions/posts';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PostsList from './PostsList';
import Navbar from './Navbar';

const home = () => <div>Home</div>;
const login = () => <div>Login</div>;
const signup = () => <div>Signup</div>;

class App extends Component {
  componentDidMount() {
    console.log('hello props', this.props);
    this.props.dispatch(fetchposts());
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={this.props.posts} /> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
          <Route exact path="/" component={home} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
        </div>
      </Router>
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
