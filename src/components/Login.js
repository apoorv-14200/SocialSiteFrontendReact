import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailInputref = React.createRef();
    this.passwordInputref = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('emailref', this.emailInputref);
    console.log('passwordref', this.passwordInputref);
  };
  render() {
    return (
      <div className="login-container">
        <div className="login-heading">Login</div>
        <form className="login-form">
          <input
            type="email"
            required
            placeholder="Enter your email"
            ref={this.emailInputref}
          ></input>
          <input
            type="password"
            required
            placeholder="Enter your password"
            ref={this.passwordInputref}
          ></input>
          <button
            type="submit"
            className="submit-btn"
            onClick={this.handleSubmit}
          >
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
