import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../spinner/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';
import './Dashboard.scss';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDeleteClick = e => {
    this.props.deleteAccount();
  };
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        console.log(profile.experience);
        dashboardContent = (
          <div className="DashboardContent">
            <p>
              Welcome
              <Link className="LinkName" to={`/profile/${profile.handle}`}>
                {user.name}
              </Link>
            </p>
            <ProfileActions />
            {profile.experience.length !== 0 ? (
              <Experience experience={profile.experience} />
            ) : null}
            {profile.education.length !== 0 ? (
              <Education education={profile.education} />
            ) : null}

            <div>
              <button
                style={{ marginTop: '40px' }}
                onClick={this.onDeleteClick}
              >
                Delete My Account
              </button>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div className="DashboardContent">
            <p> Welcome {user.name}</p>
            <p> You have not yet setup a profile,please add some info</p>
            <Link to="/CreateProfile">Create profile </Link>
          </div>
        );
      }
    }
    return <div className="container">{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
