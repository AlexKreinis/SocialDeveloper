import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profileActions';
import { getPosts } from '../../actions/postActions';
import './Stats.scss';

export class Stats extends Component {
  componentDidMount() {
    this.props.getProfiles();
    this.props.getPosts();
  }
  numberOfProfiles = profiles => {
    if (profiles !== null) {
      return profiles.length;
    }
  };
  numberOfPosts = posts => {
    if (posts !== null) {
      return posts.length;
    }
  };

  mostPopularSkills = profiles => {
    let objectCount = {};
    if (profiles) {
      profiles.map(profile => {
        profile.skills.map(skill => {
          skill = skill.toLowerCase();
          if (!(skill in objectCount)) {
            objectCount = { ...objectCount, [skill]: 1 };
          } else {
            objectCount[skill] = objectCount[skill] + 1;
          }
        });
      });
    }
    objectCount = Object.entries(objectCount);
    objectCount = objectCount.sort((a, b) => a[1] < b[1]).slice(0, 5);
    return (objectCount = objectCount.map(object => {
      return <p>{object[0].toUpperCase()} </p>;
    }));
  };
  render() {
    const { profiles } = this.props.profile;
    const { posts } = this.props.post;
    const topFive = this.mostPopularSkills(profiles);
    return (
      <div className="container">
        <div className="Stats">
          <div className="Stats-diagram">
            <h1>Dev 7 Statistics</h1>
            <h3> Number of profiles is : {this.numberOfProfiles(profiles)}</h3>
            <h3>Number of posts is : {this.numberOfPosts(posts)}</h3>
            <h3 className="Stats-topfive-header">
              <span>Top 5 skills are:</span>
              <div className="Stats-topfive"> {topFive} </div>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { getProfiles, getPosts }
)(Stats);
