import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/postActions';
import './Comment.scss';

export class CommentForm extends Component {
  state = {
    text: '',
    errors: {}
  };
  onSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { postID } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    this.props.addComment(postID, newComment);
    this.setState({ text: '' });
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      console.log(newProps.errors);
      this.setState({ errors: newProps.errors });
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div>Make a comment...</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <form className="commentForm" onSubmit={this.onSubmit}>
            <textarea
              placeholder="Reply to post"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
            />
            <button>Submit</button>
          </form>
          <span className="errors">{errors.text}</span>
        </div>
      </div>
    );
  }
}
CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  postID: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
