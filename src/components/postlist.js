import React from "react";
import axios from "axios";

export class postlist extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get(`https://schnitzeljagdar.herokuapp.com/users/getAllUser`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      });
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    );
  }
}
