import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import { clearCurrentProfile } from '../../actions/profileActions';
import './Navbar.scss';

export class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <Link className="link" to="/Profiles">
          Developers
        </Link>
        <Link className="link" to="/feed">
          Post Feed
        </Link>
        <Link className="link" to="/Dashboard">
          Dashboard
        </Link>

        <Link to="/" onClick={this.onLogoutClick}>
          <img
            src={user.avatar}
            alt={user.name}
            style={{
              width: '25px',
              marginRight: '5px',
              borderRadius: '1000px'
            }}
            title="You must have a Gravater connected to your email to display and image"
          />
          Logout
        </Link>
      </div>
    );
    const guestLinks = (
      <div>
        <Link className="link" to="/Profiles">
          Developers
        </Link>
        <Link className="link" to="/register">
          Sign Up
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    );

    return (
      <div className="nav">
        <div>
          <Link className="link" to="/">
            Dev7
          </Link>
        </div>

        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
