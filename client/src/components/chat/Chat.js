import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChatBody from './ChatBody';
import { getChat } from '../../actions/chatActions';
import { sendChat } from '../../actions/chatActions';
import './Chat.scss';
export class Chat extends Component {
  state = {
    connectingID: '',
    otherID: '',
    chat: [],
    tempChat: {
      senderName: '',
      text: ''
    }
  };
  componentDidMount() {
    const { id } = this.props.auth.user;
    const otherID = this.props.match.params.id;
    this.setState({ connectingID: id, otherID: otherID });
    const userID = { id, otherID };
    this.props.getChat(userID);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.chat.chat) {
      this.setState({ chat: nextProps.chat.chat });
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState(curr => ({
      tempChat: {
        ...curr.tempChat,
        [name]: value,
        senderName: this.props.auth.user.name
      }
    }));
  };
  onSubmit = async e => {
    e.preventDefault();
    const { tempChat } = this.state;
    await this.setState(curr => ({
      chat: [...curr.chat, { ...tempChat }],
      tempChat: { senderName: '', text: '' }
    }));

    const chatData = {
      connectingID: this.state.connectingID,
      otherID: this.state.otherID,
      chat: [...this.state.chat],
      ID: this.state.connectingID,
      otherID: this.state.otherID
    };
    this.props.sendChat(chatData);
  };

  render() {
    return (
      <div className="container">
        <div className="Chat">
          <form onSubmit={this.onSubmit} className="ChatBox">
            <textarea
              placeholder="write a message"
              onChange={this.onChange}
              name="text"
              value={this.state.tempChat.text}
            />
            <button>Submit</button>
          </form>
          <ChatBody chat={this.state.chat} />
        </div>
      </div>
    );
  }
}
//Chat.propTypes = {
//auth: PropTypes.object.isRequired
//};
const mapStateToProps = state => ({
  auth: state.auth,
  chat: state.chat
});
export default connect(
  mapStateToProps,
  { getChat, sendChat }
)(Chat);
