import React from 'react';
import "../style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Components/Particle"
import { Container, Row, Col,Button } from "react-bootstrap";
import About from "./About";
import Contact from "./Contact";
import Typewriter from "./Typewriter";
import homeLogo from "../assets/home-main-svg.svg";



const Home=()=>{
    return(
        <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
  
                <h1 className="heading-name">
                 
                  <strong className="main-name"> ACM Chapter of ABESEC</strong>
                 

                </h1>
                
  
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Typewriter />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
            </Row>
          </Container>
        </Container>
        <About id="about" />
        <Contact id="Contact" />
      </section>
    );
};

export default Home;