import React, { Component } from 'react';
import './chat-action.css';

class ChatActions extends Component {
  onHandleChangeMessage = (e) => {
    const { value } = e.target;
    const { resetMessage } = this.props;
    resetMessage(value);
  }

  onSubmitMessage = () => {
    const {
      socket, message, name, room, resetMessage, id,
    } = this.props;
    socket.emit('createNewMessage', {
      message, name, room, id,
    });
    resetMessage('');
  }

  onKeyPress = (e) => {
    const { message } = this.props;
    if (e.keyCode === 13 && message.trim() !== '') {
      this.onSubmitMessage();
    }
  }

  render() {
    const { message } = this.props;
    return (
      <div className="actions">
        <div className="input-field">
          <input
            type="text"
            placeholder="Type your message"
            autoFocus
            autoComplete="false"
            onChange={this.onHandleChangeMessage}
            onKeyDown={this.onKeyPress}
            value={message}
          />
        </div>
        <button
          disabled={message.trim() === ''}
          className="btn"
          onClick={this.onSubmitMessage}
        >
            Send
        </button>
      </div>
    );
  }
}

export default ChatActions;
