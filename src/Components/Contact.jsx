import React from 'react';
import "../style.css";
import { Container, Row, Col } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Contact=()=>{
    return(
        
      <Container fluid className="home-about-section" id="contact">
      <Container>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1 id="contactus">Contact Us </h1>
            <hr/>
            <br/>
            <br/>
            <p className="black">
              Feel free to <span className="purple">connect </span>with us for any queries
            </p>
            <div className="mailid black">Mail us at <span className="email">acm_schap@abes.ac.in</span></div>
            <br/>
            <div className="or black">OR</div>
            <br/>
            <p className="black">
              Connect to <span className="email">ACM ABESEC </span>on
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/abesec.acm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i><FacebookIcon/></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/acm-abes-ec-6967b71b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i><LinkedInIcon/></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/acm_abesec/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i><InstagramIcon/></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
      
    );
};

export default Contact;