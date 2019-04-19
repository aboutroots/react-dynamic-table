import React, { Component } from 'react';

import Tabular from '../Tabular/Tabular';
import AddPost from '../AddPost/AddPost';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{'{ Callstack }'}</header>
        <AddPost />
        <Tabular />
      </div>
    );
  }
}

export default App;
