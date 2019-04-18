/* eslint-disable react-native/no-raw-text */
import React from "react";

export class AddPost extends React.Component {
  state = {
    id: "",
    username: "",
    postTitle: "",
    views: "",
    likes: "",
    createdAt: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (inputName, inputValue) => {
    this.setState((state) => ({
      ...state,
      [inputName]: inputValue
    }));
  };

  render() {
    return (
      <div className="AddPost">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="#ID"
            type="number"
            value={this.state.id}
            onChange={(e) => this.handleChange("id", e.target.value)}
          />
          <input
            placeholder="User Name"
            type="text"
            value={this.state.userName}
            onChange={(e) => this.handleChange("username", e.target.value)}
          />
          <input
            placeholder="Post Title"
            type="text"
            value={this.state.postTitle}
            onChange={(e) => this.handleChange("postTitle", e.target.value)}
          />
          <input
            placeholder="Views"
            type="number"
            value={this.state.views}
            onChange={(e) => this.handleChange("views", e.target.value)}
          />
          <input
            placeholder="Likes"
            type="number"
            value={this.state.likes}
            onChange={(e) => this.handleChange("likes", e.target.value)}
          />
          <input
            placeholder="Created At"
            type="date"
            value={this.state.createdAt}
            onChange={(e) => this.handleChange("createdAt", e.target.value)}
          />
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
