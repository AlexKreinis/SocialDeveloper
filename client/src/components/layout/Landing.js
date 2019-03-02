import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Landing.scss';

export class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <div className="container">
        <div className="landing">
          <div className="landing-form">
            <h1>Welcome to DevBook</h1>
            <div>
              <Link to="/login">
                <button style={{ cursor: 'pointer' }} type="button">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button style={{ cursor: 'pointer' }} type="button">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);
