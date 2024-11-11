import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const FindMe = () => {
  return (
    <Container>
        <Container>
            <Row>
                <Col md={12} className="home-about-social">
                  <h1>ENCUENTRAME EN</h1>
                  <p>
                    Sientete libre de <span className="purple">contactarte </span>conmigo
                  </p>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/esteban-garrido-vizca%C3%ADno-4400b4210/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </Col>
            </Row>
        </Container> 
    </Container>
  );
}

export default FindMe;
