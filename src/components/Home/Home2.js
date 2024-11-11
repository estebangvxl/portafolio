import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Me <span className="purple"> Presento </span>
            </h1>
            <p className="home-about-body">
              Soy <b className="purple">Ingeniero electrónico</b> y desarrollador de software
              <br />apasionado por la tecnologia.
              <br />
              <br />
              Me desempeño en el area del desarrollo de software como <b className="purple">
              desarrollador frontend
              </b> &nbsp;donde combino creatividad con eficiencia para crear soluciones web innovadoras que mejoren la experiencia del usuario.
              <br />
              <br />
              Siempre en constante aprendizaje, me enfoco en aplicar las últimas <br/>tecnologías y metodologías para resolver problemas reales, impulsando la <br/>transformación digital de los proyectos en los que participo. 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
