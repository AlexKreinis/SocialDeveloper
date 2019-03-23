import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import './Profile.scss';
export class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="profileHeader">
        <div>
          <img
            style={{ borderRadius: '200px' }}
            src={profile.user.avatar}
            alt=""
          />
        </div>

        <div className="profileHeader-name">
          <h1>{profile.user.name}</h1>
          <p>
            {profile.status}
            {isEmpty(profile.company) ? null : <span>{profile.company}</span>}
          </p>
        </div>

        <div>
          {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
        </div>

        <div>
          {isEmpty(profile.website) ? null : (
            <a href={profile.website} rel="noopener noreferrer" target="_blank">
              imgWebsiteaddlater
            </a>
          )}
        </div>

        <div className="profileHeader-social">
          <div>
            {isEmpty(profile.social && profile.social.twitter) ? null : (
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            )}
          </div>
          <div>
            {isEmpty(profile.social && profile.social.facebook) ? null : (
              <a
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </a>
            )}
          </div>
          <div>
            {isEmpty(profile.social && profile.social.linkedin) ? null : (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            )}
          </div>
          <div>
            {isEmpty(profile.social && profile.social.youtube) ? null : (
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            )}
          </div>
          <div>
            {isEmpty(profile.social && profile.social.instagram) ? null : (
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
