import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import { getPost } from '../../actions/postActions';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

export class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  render() {
    const { post, loading } = this.props.post;
    let postContent;
    if (post === null || loading === true || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <div>
            <CommentForm postID={post._id} />
          </div>
          <div>
            <CommentFeed postId={post._id} comments={post.comments} />
          </div>
        </div>
      );
    }
    return (
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <Link to="/feed">Back to feed</Link>
        </div>
        <div>{postContent}</div>
      </div>
    );
  }
}
Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});
export default connect(
  mapStateToProps,
  { getPost }
)(Post);
