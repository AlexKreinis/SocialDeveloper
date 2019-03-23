import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

export class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    const firstName = profile.user.name.trim().split(' ')[0];
    const skills = profile.skills.map((skill, index) => (
      <div key={index}>{skill}</div>
    ));
    return (
      <div className="profileAbout">
        <div>
          <h3>{firstName}`s Bio</h3>
        </div>
        <div>
          <p>
            {isEmpty(profile.bio) ? (
              <span>{firstName} does not have a bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
        </div>
        <div className="profileAbout-skills">{skills}</div>
      </div>
    );
  }
}
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileAbout;
