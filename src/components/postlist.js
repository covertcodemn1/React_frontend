import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
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
        {this.state.users.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}
