import React from 'react';
import './chat-message.css';

const ChatMessages = ({ messages, id, messagesRef }) => {
  let className;

  return (

    <div
      ref={messagesRef}
      className="chat-messages"
    >
      {messages.map((message, key) => {
        const { messageID, name } = message;
        if (id === messageID) {
          className = 'message owner';
        } else {
          className = 'message';
        }
        return (
          <div
            key={key}
            className={className}
          >
            <div
              className="message-content z-depth-1"
            >
              <b>{name}</b>
:             {' '}
              {message.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
