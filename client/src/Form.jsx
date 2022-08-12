import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      surname: "",
      comment: ""
    };
  }

  render() {
    const { username, surname, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={this.handleChange}
        />
        <label htmlFor="surname">Surname</label>
        <input
          name="surname"
          type="text"
          placeholder="Enter your surname"
          value={surname}
          onChange={this.handleChange}
        />
        <label htmlFor="comment">Comment</label>
        <input
          name="comment"
          type="text"
          placeholder="Enter your comment"
          value={comment}
          onChange={this.handleChange}
        />
        <button type="submit" >Add Review</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Adding Review");
    console.log(this.state);
  };
}
