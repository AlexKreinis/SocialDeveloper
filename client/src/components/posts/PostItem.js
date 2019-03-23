import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';
import './Posts.scss';

export class PostItem extends Component {
  onDeleteClick = id => {
    this.props.deletePost(id);
  };
  onLikeClick = id => {
    this.props.addLike(id);
  };
  onUnlikeClick = id => {
    this.props.removeLike(id);
  };
  //checks if user liked the button will be implemented later
  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else return false;
  }
  render() {
    const { post, auth, showActions } = this.props;
    return (
      <div className="PostItem">
        <div>
          <a>
            <div>
              <img style={{ borderRadius: '200px' }} src={post.avatar} alt="" />
            </div>
          </a>
        </div>
        <div>
          <p>{post.name}</p>
        </div>
        <div>{post.text}</div>
        <div>
          {showActions ? (
            <span>
              {' '}
              <button
                className="PostItem-button"
                onClick={() => this.onLikeClick(post._id)}
              >
                <span>
                  <i className="far fa-thumbs-up" />
                  {post.likes.length}
                </span>
              </button>
              <button
                className="PostItem-button"
                onClick={() => this.onUnlikeClick(post._id)}
              >
                <i className="far fa-thumbs-down" />
              </button>
              <Link className="postLink" to={`/post/${post._id}`}>
                <i class="fas fa-comments" />
              </Link>
              {post.user === auth.user.id ? (
                <button
                  className="PostItem-button"
                  onClick={() => this.onDeleteClick(post._id)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
              ) : null}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}
PostItem.defaultProps = {
  showActions: true
};
PostItem.propTypes = {
  post: propTypes.object.isRequired,
  auth: propTypes.object.isRequired,
  deletePost: propTypes.func.isRequired,
  addLike: propTypes.func.isRequired,
  removeLike: propTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, removeLike, addLike }
)(PostItem);
