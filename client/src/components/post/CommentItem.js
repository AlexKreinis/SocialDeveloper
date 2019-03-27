import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';
import './Comment.scss';

export class CommentItem extends Component {
  onDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className="commentItem">
        <div>
          <img
            style={{ borderRadius: '200rem', height: '100px' }}
            src={comment.avatar}
            alt=""
          />
        </div>
        <div className="commentItem-content">
          <div>
            <p style={{ fontSize: '1.5rem' }}>{comment.name}</p>
          </div>
          <div>
            <p>{comment.text}</p>
          </div>
        </div>

        <div>
          {comment.user === auth.user.id ? (
            <button onClick={() => this.onDeleteClick(postId, comment._id)}>
              Delete comment
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
