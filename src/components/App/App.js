// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Tabular from '../Tabular/Tabular';
import AddPost from '../AddPost/AddPost';
import { authenticateUser } from '../../actions/auth';
import { fetchPostsFromApi } from '../../actions/posts';

import './App.css';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

type Props = {
  authenticateUser: (username: string) => void,
  fetchPostsFromApi: () => void,
};

type State = {
  modalIsOpen: boolean,
};

export class App extends Component<Props, State> {
  state = {
    modalIsOpen: false,
  };

  componentDidMount() {
    this.props.authenticateUser('John15');
    this.props.fetchPostsFromApi();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App" id="app">
        <header className="App-header">{'{ Callstack }'}</header>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add Post Modal"
        >
          <h2>Add new Post data</h2>
          <button onClick={this.closeModal}>Close</button>
          <AddPost afterAdd={this.closeModal} />
        </Modal>
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
