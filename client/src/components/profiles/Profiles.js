import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import { getProfiles } from '../../actions/profileActions';
import { deleteAccountAdmin } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';
import './ProfileStyle.scss';

export class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;
    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem
            key={profile._id}
            profile={profile}
            auth={this.props.auth}
            delete={this.props.deleteAccountAdmin}
          />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }
    return (
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div className="profileContainer">
          <h1 className="profieTitle">Developer profiles</h1>
          <p className="profieTitle-p">Browse and connect with developers</p>
        </div>
        <div>{profileItems}</div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  deleteAccountAdmin: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getProfiles, deleteAccountAdmin }
)(Profiles);
