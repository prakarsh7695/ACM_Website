import React from "react";
import Card from "react-bootstrap/Card";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function EventsMain() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           
            <br />We, at ACM students and women chapter ABESEC conduct various online and offline events such as
            <br />
            <br />
           <span className="blue"></span> 
          </p>
          <ul>
            <li className="about-activity">
              <i></i><span className="blue">o</span>  Internal Hakathons
            </li>
            <li className="about-activity">
              <i></i><span className="blue">o</span>  Webinars on latest technologies
            </li>
            <li className="about-activity">
              <i></i><span className="blue">o</span>  Workshops and Bootcamps
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#5ab0fa" }}>
            "Strive to build things that make a difference !"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default EventsMain;
