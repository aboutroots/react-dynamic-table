// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Tabular from '../Tabular/Tabular';
import AddPost from '../AddPost/AddPost';
import { authenticateUser } from '../../actions/auth';
import { fetchPostsFromApi } from '../../actions/posts';

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
        <header className="App-header">{'Sortable React Table'}</header>
        <div className="content-container">
          <div className="App__button-container">
            <button onClick={this.openModal} className="App__button btn">
              Add new post
            </button>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Post Modal"
          >
            <div className="content-container">
              <h2 className="AddPost__title">Add new post data</h2>
              <button
                className="App__button btn btn--secondary"
                onClick={this.closeModal}
              >
                Close
              </button>
              <AddPost afterAdd={this.closeModal} />
            </div>
          </Modal>
          <Tabular />
        </div>
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
