import React, { Component } from "react";
import axios from "axios";

export class postlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://schnitzeljagdar.herokuapp.com/users/getAllUser")
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
        hsdkjdaslkfj
        {users.length
          ? users.map(user => <div key={user.id}>{user.name}</div>)
          : null}
      </div>
    );
  }
}
