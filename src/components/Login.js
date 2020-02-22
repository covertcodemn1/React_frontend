/* eslint-disable */
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      passwort: ""
    };
  }

  enterEmail = event => {
    this.setState({ email: event.target.value });
  };
  enterPasswort = event => {
    this.setState({ passwort: event.target.value });
  };

  handellogin = () => {
    if (this.state.email > 3 && this.state.passwort > 3) {
      fetch("https://schnitzeljagdar.herokuapp.com/users/getAllUser"),
        {
          mode: "no-cors",
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            passwort: this.state.passwort
          })
        }.then(response => response.json());
    }
  };

  render() {
    return (
      <Form>
        <h3>Anmelden</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick="handellogin();">
          Submit
        </Button>
      </Form>
    );
  }
}
