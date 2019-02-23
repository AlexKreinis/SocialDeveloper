import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
export class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">DevBook</Link>
        <Link to="/profiles">Developers</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Navbar;
