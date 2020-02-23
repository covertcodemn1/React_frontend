import React from "react";

import axios from "axios";

export class postlist extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get(`https://schnitzeljagdar.herokuapp.com/users/getAllUser`)
      .then(response => {
        return response.json();
      })
      .then(persons => {
        this.setState({ persons });
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}
