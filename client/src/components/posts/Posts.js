import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Spinner from '../spinner/Spinner';
import PostFeed from './PostFeed';
import { getPosts } from '../../actions/postActions';

export class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;
    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }
    return (
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <PostForm />
          <div>{postContent}</div>
        </div>
      </div>
    );
  }
}
Posts.propTypes = {
  post: propTypes.object.isRequired,
  getPosts: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
