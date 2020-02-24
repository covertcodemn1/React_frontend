import React from "react";
import axios from "axios";

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
          username: `${user.login.username}`,
          email: `${user.email}`
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

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <h2>User</h2>
        <div>
          {!isLoading ? (
            users.map(user => {
              const { username, email } = user;
              return (
                <div key={email}>
                  <p>{username}</p>
                  <p>{email}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
