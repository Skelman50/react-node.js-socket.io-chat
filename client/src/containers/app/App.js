import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import io from 'socket.io-client';
import './App.css';
import Auth from '../auth/Auth';
import Chat from '../chat/Chat';

class App extends Component {
  socket = io();

  componentWillMount = () => {
    this.socket.on('connect', () => {
      console.log('client connect');
    });
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          component={props => (
            <Auth
              {...props}
            />
          )}
        />
        <Route
          path="/chat"
          component={props => (
            <Chat
              socket={this.socket}
              {...props}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
