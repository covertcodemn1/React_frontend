import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export class HighscoreList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("https://schnitzeljagdar.herokuapp.com/users/getAllUser")
      .then(res => this.setState({ users: [res.data] }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { users } = this.state;
    let array = users[0] ? Object.values(users[0]) : [];
    console.log(array);
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>UserName</th>
            <th>UserSchoolClass</th>
            <th>UserHighscore</th>
          </tr>
        </thead>
        <tbody>
          {array.map((arr, index) => (
            <tr key={index}>
              <td>{arr.username}</td>
              <td>{arr.schoolclass}</td>
              <td>{arr.highscore}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
