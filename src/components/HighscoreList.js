import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export class HighscoreList extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  getUsers() {
    axios

      .get("https://schnitzeljagdar.herokuapp.com/users/getAllUser")
      .then(response =>
        response.data.results.map(user => ({
          id: `${user.id}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          highscore: `${user.highscore}`,
          schoolclass: `${user.schoolclass}`
        }))
      )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <div>
          {!isLoading ? (
            <Table className="mt-4" striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>username</th>
                  <th>schoolclass</th>
                  <th>highscore</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.schoolclass}</td>
                    <td>{user.highscore}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
