import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/img/acm-1.png";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";


const About=()=>{
    return(
        <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Us </span> 
              <hr/>
            </h1>
            <p className="home-about-body">
            <span className="blue">ACM ABESEC Chapter</span> is a part of non-profit organisation ACM which stands for The Association for Computing Machinery which provides you with an opportunity to interact, grow , learn and explore Advance Computing with others.
              <br />
              <br />Our chapter has come a long way with organising various technical and non-technical events year-long in the college like
              <i>
                <b className="purple"> Hakathons, webinars and interative sessions. </b>
              </i>
              <br />
              <br />
              ACM also started a very successful initiative for women in computing, i.e. 
              <i>
                <b className="purple">
                ACM-W, ACM for Women.
                </b>
              </i>
              <br />
              <br />
              <span className="blue"> ACM ABESEC</span> helps in making learners or today into leaders of tomorrow. We, at ACM, work as a family of co-learners and mentors that possess 
              <i>
                <b className="purple"> teamwork, dedication and enthusiasm.</b>
              </i>
               
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img alt="ACM ABESEC" src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
         
      </Container>
      
    </Container>
    );
};

export default About;