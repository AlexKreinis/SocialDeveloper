import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

export class PostForm extends Component {
  state = {
    text: '',
    errors: {}
  };
  onSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    this.props.addPost(newPost);
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
        <div>Say something...</div>
        <div>
          <form onSubmit={this.onSubmit}>
            <textarea
              placeholder="Create a post"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
            />
            <button>Submit</button>
            <span className="errors">{errors.text}</span>
          </form>
        </div>
      </div>
    );
  }
}
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
