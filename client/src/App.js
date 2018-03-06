import React, { Component } from 'react';
import ThreadDisplay from './components/ThreadDisplay/components/ThreadDisplay';
import Jumbo from './components/Jumbotron/Jumbotron';
import './App.css';
import Users from './components/Users/users';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <ThreadDisplay />
        <Users />
      </div>
    );
  }
}

export default App;

