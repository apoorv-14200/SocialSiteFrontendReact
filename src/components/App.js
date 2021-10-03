import React, { Component } from 'react';
import { connect } from 'react-redux';
import posts from '../reducers/posts';
import { fetchposts } from '../actions/posts';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PostsList from './PostsList';
import Navbar from './Navbar';
import Home from './Home';
import Page404 from './Page404';
import Login from './Login';
import SignUp from './SignUp';
import jwt_decode from 'jwt-decode';
import { AuthenticateUser, logout } from '../actions/auth';

class App extends Component {
  componentDidMount() {
    console.log('hello props', this.props);
    this.props.dispatch(fetchposts());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);
      this.props.dispatch(AuthenticateUser(user));
    }
  }
  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact={true}
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" exact component={Login} />
            <Route path="/Register" exact component={SignUp} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

//switch will check for the first matching route and if found than it dont go below it breaks from that route only
function maptostate(state) {
  return {
    posts: state.posts,
  };
}
// the below function basically provides the store context value available as props
//maptostate defines the attributes which are required by the component
export default connect(maptostate)(App);
