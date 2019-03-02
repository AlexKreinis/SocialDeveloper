import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import './Login.scss';

export class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = e => {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };
  render() {
    return (
      <div className="container">
        <div className="Login">
          <div className="title">Login</div>
          <form
            onSubmit={this.onSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              name="email"
              onChange={this.onChange}
              id="email"
              type="text"
            />

            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.onChange}
              id="password"
              type="password"
            />

            <button>Login</button>
          </form>
          <span className="errors">{this.state.errors.name}</span>
          <span className="errors">{this.state.errors.password}</span>
          <span className="errors">{this.state.errors.password2}</span>
          <span className="errors">{this.state.errors.email}</span>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
