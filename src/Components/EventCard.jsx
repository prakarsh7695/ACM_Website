import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function PastEvents(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "Learn more"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default PastEvents;
