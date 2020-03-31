import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import applestore from "../assets/apple-store.png";
import googleplay from "../assets/google-play.png";
import "./style.css";

export class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Willkommen bei Schnitzeljagd AR</h1>

            <h3>Erstelle deine eigene Virtuelle Schnitzeljagd</h3>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <p>Spaß für die ganze Familie</p>
          </Col>
          <Col xs={{ order: 12 }}>
            <p>Lerne deine Umgebung spielerisch kennen</p>
          </Col>
          <Col xs={{ order: 1 }}>
            <p>Partyspaß für dich und deine Freunde</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <span class="a">Demnächst Verfügbar für</span>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 1, offset: 0 }}>
            <Image src={applestore} width={200}></Image>
          </Col>
          <Col md={{ span: 1, offset: 4 }}>
            <Image src={googleplay} width={200}></Image>
          </Col>
        </Row>
      </Container>
    );
  }
}
