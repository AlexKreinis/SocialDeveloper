import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';
import './codentials.scss';

export class AddExperience extends Component {
  state = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.props.addExperience(expData, this.props.history);
  };
  onCheck = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };
  componentWillReceiveProps(nextProp) {
    if (nextProp.errors) {
      this.setState({ errors: nextProp.errors });
    }
  }

  render() {
    const { errors } = this.state;
    console.log(errors);
    return (
      <div className="container">
        <div className="AddExperience">
          <Link to="/dashboard">
            <button style={{ margin: '3rem' }}>Go Back</button>
          </Link>
          <h1>Add Experience</h1>
          <p>
            Add any job or position that you have had in the past or current
          </p>
          <small>* required fields</small>
          <form onSubmit={this.onSubmit}>
            <div className="inputItem">
              <input
                type="text"
                placeholder="* Company"
                name="company"
                value={this.state.company}
                onChange={this.onChange}
              />
              <span className="errors">{errors.company}</span>
            </div>
            <div className="inputItem">
              <input
                type="text"
                placeholder="* Job Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
              <span className="errors">{errors.title}</span>
            </div>
            <div className="inputItem">
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
              />
              <span className="errors">{errors.location}</span>
            </div>

            <div className="inputItem">
              <h6> From Date</h6>
              <input
                type="date"
                placeholder="date"
                name="from"
                value={this.state.from}
                onChange={this.onChange}
              />
              <span className="errors">{errors.from}</span>
            </div>

            <div className="inputItem">
              <h6> To Date</h6>
              <input
                type="date"
                name="to"
                value={this.state.to}
                onChange={this.onChange}
                disabled={this.state.disabled ? 'disabled' : ''}
              />
              <span className="errors">{errors.to}</span>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  name="current"
                  value={this.state.current}
                  checked={this.state.current}
                  onChange={this.onCheck}
                  id="current"
                />
                <label htmlFor="current">Current Job</label>
              </div>
              <textarea
                placeholder="job description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                error={errors.description}
                info="Tell us about the position"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
