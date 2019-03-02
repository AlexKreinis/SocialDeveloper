import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import { Link } from 'react-router-dom';
import '../../generalstyles/form.scss';

export class EditProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      const skillsCSV = profile.skills.join(',');

      profile.company = !isEmpty(profile.company) ? profile.company : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : '';
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : '';
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : '';
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : '';
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : '';

      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram
      });
    }
  }

  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  };
  render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Twitter profile URL"
            name="twitter"
            value={this.state.twitter}
            onChange={this.onChange}
          />
          <span>{errors.twitter}</span>
          <input
            placeholder="Facebook profile URL"
            name="facebook"
            value={this.state.facebook}
            onChange={this.onChange}
          />
          <span>{errors.facebook}</span>
          <input
            placeholder="LinkedIn profile URL"
            name="linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
          />
          <span>{errors.linkedin}</span>
          <input
            placeholder="Youtube profile URL"
            name="youtube"
            value={this.state.youtube}
            onChange={this.onChange}
          />
          <span>{errors.youtube}</span>
          <input
            placeholder="Instagram profile URL"
            name="instagram"
            value={this.state.instagram}
            onChange={this.onChange}
          />
          <span>{errors.instagram}</span>
        </div>
      );
    }

    const options = [
      { label: '*Select Proffesional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];
    const selectOptions = options.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    return (
      <div className="container">
        <div className="form">
          <div>
            <Link to="/dashboard">
              <button style={{ margin: '3rem' }}>Go Back</button>
            </Link>
          </div>

          <div>
            <h1>Edit Profile</h1>
          </div>

          <div>
            <small> * required fields</small>
          </div>
          <form
            onSubmit={this.onSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <input
              className="form-input"
              placeholder="* Profile handle"
              name="handle"
              value={this.state.handle}
              onChange={this.onChange}
            />
            <div className="form-description">
              <span className="form-span">
                "A unique handle for your profile URL. Your full name,company
                name,nickname"
              </span>
              <span className="errors">{errors.handle}</span>
            </div>

            <select
              className="form-input"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              {selectOptions}
            </select>
            <div className="form-description">
              <span className="form-span">
                Give us an idea where you are at your career
              </span>
              <span className="errors">{errors.status}</span>
            </div>

            <input
              className="form-input"
              placeholder="Company"
              name="company"
              value={this.state.company}
              onChange={this.onChange}
            />
            <div className="form-description">
              <span className="form-span">
                could be your own company or one you work for
              </span>
              <span className="errors">{errors.company}</span>
            </div>

            <input
              className="form-input"
              placeholder="Website"
              name="website"
              value={this.state.website}
              onChange={this.onChange}
            />
            <div className="form-description">
              <span className="form-span">
                Could be your own or company website
              </span>
              <span className="errors">{errors.website}</span>
            </div>
            <input
              className="form-input"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.onChange}
            />
            <div className="form-description">
              <span className="form-span">City and area</span>
              <span className="errors">{errors.location}</span>
            </div>
            <input
              className="form-input"
              placeholder="Skills"
              name="skills"
              value={this.state.skills}
              onChange={this.onChange}
            />
            <div className="form-description">
              <span className="form-span">
                Please use comma seperated value [eg, HTML,CSS,JavaScript,PHP]
              </span>
              <span className="errors">{errors.skills}</span>
            </div>
            <input
              className="form-input"
              placeholder="Github Username"
              name="githubusername"
              value={this.state.githubusername}
              onChange={this.onChange}
            />
            <div className="form-description">
              <span className="form-span">
                if you want your latest repos and a Github link,include your
                username
              </span>
              <span className="errors">{errors.githubusername}</span>
            </div>
            <textarea
              className="form-input"
              placeholder="A short bio of yourself"
              name="bio"
              value={this.state.bio}
              onChange={this.onChange}
            />
            <div className="form-description">
              <span className="form-span">Tell us a little about yourself</span>
              <span className="errors">{errors.bio}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                this.setState(curr => ({
                  displaySocialInputs: !curr.displaySocialInputs
                }));
              }}
            >
              Add Social Network Links
            </button>
            {socialInputs}
            <button style={{ marginBottom: '5rem' }}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, createProfile }
)(withRouter(EditProfile));
