import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export class HighscoreList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get(`https://schnitzeljagdar.herokuapp.com/users/getAllUser`)
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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
            {this.state.map(user => (
              <tr key={user.ID}>
                <td>{user.UserID}</td>
                <td>{user.UserName}</td>
                <td>{user.UserSchoolClass}</td>
                <td>{user.UserHighscore}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}
