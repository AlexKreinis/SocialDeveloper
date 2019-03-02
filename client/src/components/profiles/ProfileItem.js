import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import './ProfileStyle.scss';

export class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="profileCard">
        <div>
          <img src={profile.user.avatar} alt="" />
        </div>

        <div className="profileCard-details">
          <h3>{profile.user.name}</h3>
          <p>
            {profile.status}
            {isEmpty(profile.company) ? null : (
              <span>at {profile.company}</span>
            )}
          </p>
          <p>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>
          <Link to={`/profile/${profile.handle}`}>
            <button>View Profile </button>
          </Link>
        </div>

        <div className="profileCard-skills">
          <h4>Skill Set</h4>
          <ul>
            {profile.skills.slice(0, 4).map((skill, index) => (
              <li key={index}> {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
