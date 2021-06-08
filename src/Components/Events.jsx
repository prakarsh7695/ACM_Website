import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PastEvents from "./EventCard";
import EventsMain from "./EventMain";
import laptopImg from "../assets/about.png";
import a from "../assets/PastEvents/1.PNG";
import b from "../assets/PastEvents/2.PNG";
import c from "../assets/PastEvents/3.PNG";
import d from "../assets/PastEvents/4.PNG";
import e from "../assets/PastEvents/5.PNG";
import f from "../assets/PastEvents/6.PNG";

function Events() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Events <strong className="blue">ACM</strong> conducts
            </h1>
            <EventsMain />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong className="purple">Upcoming</strong> Events
         <hr/>
         <br/>
         <br/>
         <p className="black">No upcoming events to show.</p>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
         
        </Row>
        <h1 className="project-heading">
          <strong>Past </strong> Events
        </h1>
        <hr></hr>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
            
            <Col md={4} className="project-card">
            <PastEvents
              imgPath={a}
              isBlog={false}
              title="How to get into FAANG"
              description="Workshop with Software Engineers of Dream Companies. It was an interactive session organised by ACM Student and Women's Chapters to get the right path for placements."
              link="https://www.instagram.com/p/CIUoaOPAAv8/"
            />
          </Col>
          <Col md={4} className="project-card">
            <PastEvents
              imgPath={b}
              isBlog={false}
              title="Dev X"
              description="An online WEB DEVELOPMENT contest wherein the participants were provided with a prototype and they had to code it within a given time frame."
              link="https://www.instagram.com/p/CIUoIQeACV3/"
            />
          </Col>
          <Col md={4} className="project-card">
            <PastEvents
              imgPath={c}
              isBlog={false}
              title="Web Weaver"
              description="A 24 hours long online event in which each participant had to design a home page for a website. The most innovative design wins."
              link="https://www.instagram.com/p/CIUn2vAADqV/"
            />
          </Col>
          <Col md={4} className="project-card">
            <PastEvents
              imgPath={d}
              isBlog={false}
              title="Quizsom"
              description="A quiz cum coding contest where you need to solve 6 coding questions. The outputs to the 6 will form a string which will give you the final answer."
              link="https://www.instagram.com/p/CIUnn5OgeIB/"
            />
          </Col>
          <Col md={4} className="project-card">
            <PastEvents
              imgPath={e}
              isBlog={false}
              title="How to ace a HAKATHON"
              description="A workshop orgaized by ACM on how to ace a hakathon by Smart India Hakathon 2020 winner team lead.This was conducted before 5th ACM-W India National Level Virtual Hakathon."
              link="https://www.instagram.com/p/CFyvu72MjYI/"
            />
          </Col>
          <Col md={4} className="project-card">
            <PastEvents
              imgPath={f}
              isBlog={false}
              title="ACM Internal Hakathon"
              description="A virtual Hakathon with theme of the hackathon was 'Self Reliant India’ – a small step towards Self Reliant India for innovative ideas using IT Solution in various domains."
              link="https://www.instagram.com/p/CFxY98-sti9/"
            />
          </Col>
            
        </Row>
       
      </Container>
    </Container>
  );
}

export default Events;
