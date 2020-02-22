import React, { Component } from "react";
import { Table } from "react-bootstrap";

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

export class Highscore extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://schnitzeljagdar.herokuapp.com/users/getAllUser`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          isLoading: false,
          users: json.users
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, highscore, email } = user;
            return (
              <div key={username}>
                <p>Highscore: {highscore}</p>
                <p>Email Address: {email}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}
