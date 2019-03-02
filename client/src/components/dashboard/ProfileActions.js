import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileActions.scss';

const ProfileActions = () => {
  return (
    <div className="ProfileActions">
      <Link to="/EditProfile">
        <button> Edit profile</button>
      </Link>
      <Link to="/AddExperience">
        <button>Add Experience</button>
      </Link>
      <Link to="/AddEducation">
        <button>Add Education</button>
      </Link>
    </div>
  );
};

export default ProfileActions;
