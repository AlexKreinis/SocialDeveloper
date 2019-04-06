import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import { withRouter } from 'react-router-dom';

export class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    role: '',
    errors: {}
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <div className="Login">
          <div className="title">Sign-in</div>
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
            />
            <label htmlFor="name">name</label>
            <input
              value={this.state.name}
              name="name"
              onChange={this.onChange}
              id="name"
            />
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.onChange}
              id="password"
              type="password"
            />
            <label htmlFor="password2">Password2</label>
            <input
              value={this.state.password2}
              name="password2"
              onChange={this.onChange}
              id="password2"
              type="password"
            />
            <button>Register</button>
            <span>{this.state.errors.name}</span>
            <span>{this.state.errors.password}</span>
            <span>{this.state.errors.password2}</span>
            <span>{this.state.errors.email}</span>
          </form>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStatetoProps = state => ({
  auth: state.auth, //state is the rootreducer
  errors: state.errors
});
export default connect(
  mapStatetoProps,
  { registerUser }
)(withRouter(Register));
