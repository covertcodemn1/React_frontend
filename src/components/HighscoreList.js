import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export class HighscoreList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://schnitzeljagdar.herokuapp.com/users/getAllUser`)
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
        <React.Fragment>
        <ul>
          {this.state.users.map{user =>
          <li>
            {user.name}
          </li>
          }}
        </ul>
      </React.Fragment>
    );
  }
}
