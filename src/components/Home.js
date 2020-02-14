import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userdata: [] };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList() {
    console.log("inside handleGetJson");
    fetch("https://schnitzeljagdar.herokuapp.com/users/getAllUser")
      .then(response => response.json())
      .then(data => {
        this.setState({ userdata: data });
      });
  }

  render() {
    const { userdata } = this.state;
    return (
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
    );
  }
}
