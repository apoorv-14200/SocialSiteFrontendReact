import React, { Component } from 'react';

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
