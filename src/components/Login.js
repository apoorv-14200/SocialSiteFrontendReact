import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authorizeuser, clearauthstate } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputref = React.createRef();
    // this.passwordInputref = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmailInput = (e) => {
    let email = e.target.value;
    this.setState({
      email: email,
    });
  };
  handlePasswordInput = (e) => {
    let password = e.target.value;
    this.setState({
      password: password,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('emailref', this.emailInputref);
    // console.log('passwordref', this.passwordInputref);
    console.log(this.state);
    this.props.dispatch(authorizeuser(this.state));
  };
  componentWillUnmount() {
    this.props.dispatch(clearauthstate());
  }
  render() {
    const { error, inProgress, user, isLoggedIn } = this.props.auth;
    const { from } = this.props.location.state || {
      from: { pathname: '/SocialSiteFrontendReact/' },
    };
    if (isLoggedIn) {
      return <Redirect to={from} />;
    }
    console.log(this.props.auth);
    return (
      <div className="login-container">
        <div className="login-heading">Login</div>
        {error && <div className="alert-dialog">{error}</div>}
        {isLoggedIn && (
          <div className="success-dialog">{`Successfully signed in as ${user.name}`}</div>
        )}
        <form className="login-form">
          <input
            type="email"
            required
            placeholder="Enter your email"
            onChange={this.handleEmailInput}
            // ref={this.emailInputref}
          ></input>
          <input
            type="password"
            required
            placeholder="Enter your password"
            onChange={this.handlePasswordInput}
            // ref={this.passwordInputref}
          ></input>
          {inProgress ? (
            <button
              type="submit"
              className="submit-btn"
              onClick={this.handleSubmit}
              disabled={inProgress}
            >
              Logging In
            </button>
          ) : (
            <button
              type="submit"
              className="submit-btn"
              onClick={this.handleSubmit}
            >
              Log In
            </button>
          )}
        </form>
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapToState)(Login);
