import React from "react";
import axios from "axios";

export class HighscoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <h2>User</h2>
      </React.Fragment>
    );
  }
}
