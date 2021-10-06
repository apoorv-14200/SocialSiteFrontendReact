import React, { Component } from 'react';

import { connect } from 'react-redux';
import { clearauthstate } from '../actions/auth';
import {
  edit_profile_failed,
  edit_user_profile,
} from '../actions/edit_profile';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editmode: false,
      name: props.auth.user.name,
      password: '',
      confirmpassword: '',
    };
  }
  handleChange = (val, fieldname) => {
    this.setState({
      [fieldname]: val,
    });
  };
  handleEdit = () => {
    this.setState({
      editmode: true,
    });
  };
  handleBack = () => {
    this.setState({
      editmode: false,
    });
  };
  fun = () => {
    const { error } = this.props.auth;
    if (error == false) {
      this.setState({
        editmode: false,
      });
    }
  };
  handleSave = () => {
    const { name, password, confirmpassword } = this.state;
    if (
      name.length == 0 ||
      password.length == 0 ||
      confirmpassword != password
    ) {
      this.props.dispatch(edit_profile_failed('Invalid Input'));
    } else {
      const id = this.props.auth.user._id;
      console.log('Success', id);
      this.props.dispatch(
        edit_user_profile(name, password, confirmpassword, id)
      );
      setTimeout(this.fun, 1000);
    }
  };
  componentWillUnmount() {
    this.props.dispatch(clearauthstate());
  }
  render() {
    const { editmode } = this.state;
    const { user, error, profile_changed } = this.props.auth;
    console.log(editmode);
    return (
      <div className="setting-container">
        <div className="user-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"></img>
        </div>
        {error && <div className="alert-dialog">{error}</div>}
        {error == false && editmode == true && (
          <div className="success-dialog">Successfully Updated</div>
        )}
        <div className="show-field">
          <div className="show-field-heading">Email</div>
          <div className="show-field-input">{user.email}</div>
        </div>
        {editmode == false && (
          <div className="show-field">
            <div className="show-field-heading">Name</div>
            <div className="show-field-input">{user.name}</div>
          </div>
        )}
        {editmode && (
          <div className="show-input">
            <div className="show-field-heading">Name</div>
            <input
              value={this.state.name}
              onChange={(e) => {
                this.handleChange(e.target.value, 'name');
              }}
            ></input>
          </div>
        )}
        {editmode && (
          <div className="show-input">
            <div className="show-field-heading">New Password</div>
            <input
              onChange={(e) => {
                this.handleChange(e.target.value, 'password');
              }}
            ></input>
          </div>
        )}
        {editmode && (
          <div className="show-input">
            <div className="show-field-heading">Confirm Password</div>
            <input
              onChange={(e) => {
                this.handleChange(e.target.value, 'confirmpassword');
              }}
            ></input>
          </div>
        )}
        <div className="Button-container">
          {editmode == false && (
            <button className="setting-btn" onClick={this.handleEdit}>
              Edit Profile
            </button>
          )}
          {editmode && (
            <button className="setting-btn" onClick={this.handleSave}>
              Save Profile
            </button>
          )}
          {editmode && (
            <button className="setting-btn" onClick={this.handleBack}>
              Go Back
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapToState)(Settings);
