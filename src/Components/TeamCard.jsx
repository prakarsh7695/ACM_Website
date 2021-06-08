import React from "react";
import Card from "react-bootstrap/Card";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function PastEvents(props) {
  return (
    <Card className="team-card-view">
      <Card.Img class="team-card-img-top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <hr></hr>
        <div className="blue">{props.bio}</div>
        

         
         <div className="team-card-bio justify-content">
         <li className="social-icons team-icon">
                <a
                  href={props.insta}
                  target="_blank"
                  rel="noreferrer"
                  className="team-icon"
                >
                  <i><InstagramIcon/></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={props.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="team-icon"
                >
                  <i><LinkedInIcon/></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={props.github}
                  target="_blank"
                  rel="noreferrer"
                  className="team-icon"
                >
                  <i><GitHubIcon/></i>
                </a>
              </li>
         </div>
          
      
      </Card.Body>
    </Card>
  );
}
export default PastEvents;
