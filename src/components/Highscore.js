import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

/*
export class Highscore extends Component {
  constructor(props) {
    super(props);
    this.state = { userdata: [] };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("https://schnitzeljagdar.herokuapp.com/users/getAllUser")
      .then(response => response.json())
      .then(data => {
        this.setState({ userdata: data });
      });
    
    this.setState({
      userdata: [
        {
          UserID: 1,
          UserName: "User1",
          UserSchoolClass: "4BHIF",
          UserHighscore: 212
        },
        {
          UserID: 2,
          UserName: "User2",
          UserSchoolClass: "1AHIF",
          UserHighscore: 42
        },
        {
          UserID: 3,
          UserName: "User3",
          UserSchoolClass: "2BHIF",
          UserHighscore: 400
        }
      ]
    });
  }
  render() {
    const { userdata } = this.state;
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
            {userdata.map(user => (
              <tr key={user.UserID}>
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
*/

export class Highscore extends Component {
  state = {
    users: ""
  };

  componentDidMount() {
    Axios.get("https://schnitzeljagdar.herokuapp.com/users/getAllUser").then(
      response => {
        const users = response.data;
        this.setState({ users });
      }
    );
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>user.username</li>
        ))}
      </ul>
    );
  }
}
