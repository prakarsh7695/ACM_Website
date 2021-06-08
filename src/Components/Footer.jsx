import React from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        
        <Col md="4" className="footer-copywright">
       
        </Col>
        <Col md="4" className="footer-body">
          <ul>
          <h3>Copyright © {year} ACM | ABES EC</h3>
          <br/>
          <h3>Designed and Developed by <a target="_blank" id="name" href="https://www.linkedin.com/in/prakarsh7/">Prakarsh</a></h3>
         
          
          
         
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
