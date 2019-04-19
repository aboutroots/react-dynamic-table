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

  validatePost = (post: postType) => {
    const no_empty_fields = Object.values(post).every(val => !!val);
    if (no_empty_fields) return true;
  };

  render() {
    return (
      <div className="AddPost">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="#ID"
            type="number"
            value={this.state.id}
            onChange={e => this.handleChange('id', e.target.value)}
          />
          <input
            placeholder="User Name"
            type="text"
            value={this.state.username}
            onChange={e => this.handleChange('username', e.target.value)}
          />
          <input
            placeholder="Post Title"
            type="text"
            value={this.state.postTitle}
            onChange={e => this.handleChange('postTitle', e.target.value)}
          />
          <input
            placeholder="Views"
            type="number"
            value={this.state.views}
            onChange={e => this.handleChange('views', e.target.value)}
          />
          <input
            placeholder="Likes"
            type="number"
            value={this.state.likes}
            onChange={e => this.handleChange('likes', e.target.value)}
          />
          <input
            placeholder="Created At"
            type="date"
            value={this.state.createdAt}
            onChange={e => this.handleChange('createdAt', e.target.value)}
          />
          <button type="submit">Add Post</button>
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
