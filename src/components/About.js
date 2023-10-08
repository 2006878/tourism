import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import MainCarousel from "./Carousel";
import { ReactComponent as Award } from "../assets/svg/award.svg";
import { ReactComponent as Shield } from "../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";

class About extends Component {
  render() {
    return (
      <div id='about'>
        <MainCarousel />

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>Sobre os serviços</h1>
              <p>Passeios guiados em grupo ou particular</p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Guias autamente qualificados</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Diversão e segurança</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>As melhores experiências</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Passeios Seguros</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
