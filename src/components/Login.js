/* eslint-disable */
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginErros: ""
    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handelSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "https://schnitzeljagdar.herokuapp.com/users/login",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log("error", response);
      })
      .catch(error => {
        console.log("error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <h3>Anmelden</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            defaultValue={this.state.email}
            onChange={this.handelChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            defaultValue={this.state.password}
            onChange={this.handelChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
