import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabular from '../Tabular/Tabular';
import AddPost from '../AddPost/AddPost';
import { authenticateUser } from '../../actions/auth';
import { fetchPostsFromApi } from '../../actions/posts';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.authenticateUser('John15');
    this.props.fetchPostsFromApi();
  }
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

const mapDispatchToProps = dispatch => ({
  authenticateUser: username => dispatch(authenticateUser(username)),
  fetchPostsFromApi: () => dispatch(fetchPostsFromApi()),
});

export default connect(
  undefined,
  mapDispatchToProps
)(App);
