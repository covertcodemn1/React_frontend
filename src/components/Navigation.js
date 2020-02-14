import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo1.svg";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="./">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block bg-dark text-white"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-4 bg-dark text-white" to="./">
              Home
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink className="d-inline p-4 bg-dark text-white" to="/login">
              Login
            </NavLink>
            <NavLink className="d-inline p-4 bg-dark text-white" to="/register">
              Konto erstellen
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
