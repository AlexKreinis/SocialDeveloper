import React, { Component } from 'react';
import './Login.scss';
export class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };
  onChange = e => {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };
  render() {
    return (
      <div className="container">
        <div className="Login">
          <div>Login</div>
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
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.onChange}
              id="password"
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
