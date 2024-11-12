import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pagePokemons from "../../Assets/Projects/home.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong> recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí veras mis proyectos
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pagePokemons}
              isBlog={false}
              title="Pokedex"
              description="En la pokedex podrás consultar las diferentes criaturas en el mundo de los pokemones. ¡Atrapalos ya!"
              ghLink="https://github.com/estebangvxl/pokemons"
              demoLink="https://pokemonsprojectapp.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
