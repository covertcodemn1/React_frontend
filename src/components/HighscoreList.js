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
    var users = [];
    if (this.state.listOfUsers) {
      user = this.state.listOfUsers.map(user => {
        return <p>{user.ID}</p>;
      });
    }
    return (
      <React.Fragment>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>UserID</th>
              <th>UserName</th>
              <th>UserSchoolClass</th>
              <th>UserHighscore</th>
            </tr>
          </thead>
          <tbody>
            <tr key={user.UserID}>
              <td>{user.UserID}</td>
              <td>{user.UserName}</td>
              <td>{user.UserSchoolClass}</td>
              <td>{user.UserHighscore}</td>
            </tr>
            )}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}
