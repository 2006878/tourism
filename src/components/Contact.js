import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";

class Contact extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Contato</h1>
            <p>Entre em contato conosco e encontre sua aventura</p>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>35 99999 9999</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>Região da Canastra, Minas Gerais</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>contato@guicanastra.com.br</p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <br />
          <section className="msg text-center">
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Seu nome"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Seu email"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Sua mensagem"
                  />
                  <Button outline color="light" className="float-left">
                  Enviar mensagem
                  </Button>
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </div>
    );
  }
}

export default Contact;
