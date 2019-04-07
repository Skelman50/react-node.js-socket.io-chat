import React, { Component } from 'react';

import ChatContent from '../../components/chat-content/ChatContent';
import ChatActions from '../../components/chat-actions/ChatActions';


class Chat extends Component {

    messagesRef = React.createRef();

    state = {
      messages: [],
      message: '',
      room: '',
      name: '',
      id: '',
      messageID: '',
      users: [],
    };


  componentWillMount = () => {
    const { search } = this.props.location;
    this.searchParams(search);
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.joinNewUser();
    }, 500) 
  }

  searchParams = (location) => {
    const params = location.split('&');
    const name = params[0].split('=')[1];
    const room = params[1].split('=')[1];
    this.initializeParams(name, room);
  }

  initializeParams = (name, room) => {
    this.setState({ name, room });
  }

  joinNewUser = () => {
    const { name, room } = this.state;
    const { socket } = this.props
    socket.emit('join', { name, room }, (data) => {
      this.setState({ id: data.userID });
      this.initializideMessage();
    });
  }

  initializideMessage = () => {
    const { socket } = this.props
    socket.on('usersUpdate', (users) => {
      this.setState({ users });
    });

    socket.on('newMessage', (data) => {
      const { message, messageID, name } = data;
      this.addNewMessage({ message, messageID, name });
      const { current } = this.messagesRef;
      this.messagesScrol(current);
    });
  }

  addNewMessage = (message) => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, message],
    });
  }

  resetMessage = (value) => {
    this.setState({
      message: value,
    });
  }

  messagesScrol = (node) => {
    node.scrollTop = node.scrollHeight;
  }


  render() {
    const { socket } = this.props
    return (
      <div id="actions">
        <ChatContent {...this.state} {...this.props} messagesRef={this.messagesRef} />
        <ChatActions
          {...this.state}
          resetMessage={this.resetMessage}
          socket={socket}
        />
      </div>
    );
  }
}

export default Chat;
