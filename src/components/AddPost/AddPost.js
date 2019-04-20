// @flow
import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import { addPost } from '../../actions/posts';

import type { postType } from '../../flow/exports';

type Props = {
  addPost: (post: postType) => void,
  afterAdd: () => void,
};

type State = {
  id: string,
  username: string,
  postTitle: string,
  views: string,
  likes: string,
  createdAt: string,
};
export class AddPost extends React.Component<Props, State> {
  state = {
    id: '',
    username: '',
    postTitle: '',
    views: '',
    likes: '',
    createdAt: '',
  };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { id, username, postTitle, likes, views, createdAt } = this.state;

    // parse string values into correct types
    createdAt = moment(createdAt).valueOf();
    id = parseInt(id);
    likes = parseInt(likes);
    views = parseInt(views);

    const post = { id, username, postTitle, likes, views, createdAt };
    if (this.validatePost(post)) {
      this.props.addPost(post);
      this.props.afterAdd();
    }
  };

  handleChange = (inputName: string, inputValue: string) => {
    this.setState(state => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  validatePost = ({
    id,
    username,
    postTitle,
    likes,
    views,
    createdAt,
  }: postType) => {
    let numberTypesFailed = [id, likes, views].some(
      val => Number.isNaN(val) || val < 0
    );
    let stringTypesFailed = [username, postTitle].some(
      val => val.trim() === ''
    );
    let dateNumberFailed = Number.isNaN(createdAt);

    return numberTypesFailed || stringTypesFailed || dateNumberFailed
      ? false
      : true;
  };

  render() {
    return (
      <div className="AddPost">
        <form onSubmit={this.handleSubmit} className="AddPost__form">
          <input
            placeholder="#ID"
            type="number"
            value={this.state.id}
            onChange={e => this.handleChange('id', e.target.value)}
            className="AddPost__form-element inpt"
          />
          <input
            placeholder="User Name"
            type="text"
            value={this.state.username}
            onChange={e => this.handleChange('username', e.target.value)}
            className="AddPost__form-element inpt"
          />
          <input
            placeholder="Post Title"
            type="text"
            value={this.state.postTitle}
            onChange={e => this.handleChange('postTitle', e.target.value)}
            className="AddPost__form-element inpt"
          />
          <input
            placeholder="Views"
            type="number"
            value={this.state.views}
            onChange={e => this.handleChange('views', e.target.value)}
            className="AddPost__form-element inpt"
          />
          <input
            placeholder="Likes"
            type="number"
            value={this.state.likes}
            onChange={e => this.handleChange('likes', e.target.value)}
            className="AddPost__form-element inpt"
          />
          <input
            placeholder="Created At"
            type="date"
            value={this.state.createdAt}
            onChange={e => this.handleChange('createdAt', e.target.value)}
            className="AddPost__form-element inpt"
          />
          <button
            type="submit"
            className="AddPost__form-element AddPost__button btn"
          >
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddPost);
