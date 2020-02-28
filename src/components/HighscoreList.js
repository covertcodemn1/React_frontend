import React from "react";
import axios from "axios";
import { Table, Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

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
    const Title = styled.h1`
      color: red;
      font-family: sans-serif;
      font-weight: bold;
    `;

    const { users } = this.state;
    let array = users[0] ? Object.values(users[0]) : [];
    console.log(array);
    return (
      <Container>
        <Row>
          <Col md={{ span: 0, offset: 5 }}>
            <Title>Highscore</Title>
          </Col>
        </Row>

        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Klasse</th>
              <th>Highscore</th>
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
      </Container>
    );
  }
}
