import React from 'react';
import './chat-content.css';
import UsersCollection from '../users-collection/UsersCollection';
import ChatMessages from '../chat-messages/ChatMessages';

const ChatContent = (props) => (
  <div className="chat">
    <UsersCollection {...props} />
    <ChatMessages {...props} />
  </div>
);

export default ChatContent;
