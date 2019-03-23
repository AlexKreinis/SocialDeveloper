import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';

export class CommentItem extends Component {
  onDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div>
        <div>
          <img src={comment.avatar} alt="" />
        </div>
        <div>
          <p>{comment.name}</p>
        </div>
        <div>
          <p>{comment.text}</p>
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
