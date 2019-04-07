import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Auth from '../auth/Auth';
import Chat from '../chat/Chat';

class App extends Component {
  
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
              {...props}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
