import React, { Component } from "react";
import axios from "axios";

export class HighscoreList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://myorg.api.crm.dynamics/api/")
      .then(response => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        List of users
        {users.length
          ? users.map(user => <div key={user.id}>{user.id}</div>)
          : null}
      </div>
    );
  }
}
