import React, { Component } from 'react';
import { connect } from 'react-redux';
import posts from '../reducers/posts';
import { fetchposts } from '../actions/posts';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PostsList from './PostsList';
import Navbar from './Navbar';
import Home from './Home';
import Page404 from './Page404';
import Login from './Login';
import SignUp from './SignUp';
import jwt_decode from 'jwt-decode';
import { AuthenticateUser, logout } from '../actions/auth';
import Settings from './Settings';
import Profile from './Profile';
import Footer from './Footer';

const PrivateRoute = (PrivateRouteProps) => {
  const { isLoggedIn, path, component: Component } = PrivateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        console.log('Props', props);
        return isLoggedIn == true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/SocialSiteFrontendReact/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);
      this.props.dispatch(AuthenticateUser(user));
    }
  }
  render() {
    const { posts, auth } = this.props;
    console.log('loggedin', auth.isLoggedIn);
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact={true}
              path="/SocialSiteFrontendReact"
              render={(props) => {
                return <Home {...props} />;
              }}
            />
            <Route
              path="/SocialSiteFrontendReact/login"
              exact
              component={Login}
            />
            <Route
              path="/SocialSiteFrontendReact/Register"
              exact
              component={SignUp}
            />
            <PrivateRoute
              path="/SocialSiteFrontendReact/settings"
              exact
              component={Settings}
              isLoggedIn={auth.isLoggedIn}
            />
            <PrivateRoute
              path="/SocialSiteFrontendReact/user/:userId"
              exact
              component={Profile}
              isLoggedIn={auth.isLoggedIn}
            />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

//switch will check for the first matching route and if found than it dont go below it breaks from that route only
function maptostate(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}
// the below function basically provides the store context value available as props
//maptostate defines the attributes which are required by the component
export default connect(maptostate)(App);
