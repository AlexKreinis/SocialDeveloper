import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';
import './codentials.scss';

export class AddEducation extends Component {
  state = {
    school: '',
    degree: '',
    fieldofstudy: '',
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
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.props.addEducation(eduData, this.props.history);
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
          <h1>Add Education</h1>
          <p>Add any school, bootcamp, etc that you attended</p>
          <small>* required fields</small>
          <form onSubmit={this.onSubmit}>
            <div className="inputItem">
              <input
                type="text"
                placeholder="* School"
                name="school"
                value={this.state.school}
                onChange={this.onChange}
              />
              <span className="errors">{errors.school}</span>
            </div>
            <div className="inputItem">
              <input
                type="text"
                placeholder="* Degree"
                name="degree"
                value={this.state.degree}
                onChange={this.onChange}
              />
              <span className="errors">{errors.degree}</span>
            </div>
            <div className="inputItem">
              <input
                type="text"
                placeholder="Field of study"
                name="fieldofstudy"
                value={this.state.fieldofstudy}
                onChange={this.onChange}
              />
              <span className="errors">{errors.fieldofstudy}</span>
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
                <label htmlFor="current">Still a student</label>
              </div>
              <textarea
                placeholder="short description"
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

AddEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
