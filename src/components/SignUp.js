import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorizeuser } from '../actions/auth';
import { createuser } from '../actions/Sign_up_auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
    // this.emailInputref = React.createRef();
    // this.passwordInputref = React.createRef();
    this.state = {
      email: '',
      password: '',
      confirmpassword: '',
      name: '',
    };
  }
  handleEmailInput = (e) => {
    let email = e.target.value;
    this.setState({
      email: email,
    });
  };
  handleConfirmPasswordInput = (e) => {
    let confirmpassword = e.target.value;
    this.setState({
      confirmpassword: confirmpassword,
    });
  };
  handleNameInput = (e) => {
    let name = e.target.value;
    this.setState({
      name: name,
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
    this.props.dispatch(createuser(this.state));
  };
  render() {
    const { error, inProgress, user, isLoggedIn } = this.props.auth;
    console.log(this.props.auth);
    return (
      <div className="login-container">
        <div className="login-heading">SignUp</div>
        {error && <div className="alert-dialog">{error}</div>}
        {isLoggedIn && (
          <div className="success-dialog">{`Successfully signed in as ${user.user.name}`}</div>
        )}
        <form className="login-form">
          <input
            type="text"
            required
            placeholder="Enter your name"
            onChange={this.handleNameInput}
            // ref={this.emailInputref}
          ></input>
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
          <input
            type="password"
            required
            placeholder="Enter password again"
            onChange={this.handleConfirmPasswordInput}
            // ref={this.passwordInputref}
          ></input>
          {inProgress ? (
            <button
              type="submit"
              className="submit-btn"
              onClick={this.handleSubmit}
              disabled={inProgress}
            >
              Signing Up
            </button>
          ) : (
            <button
              type="submit"
              className="submit-btn"
              onClick={this.handleSubmit}
            >
              Sign Up
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

export default connect(mapToState)(SignUp);
