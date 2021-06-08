import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import TeamCard from "./TeamCard";
import a from "../assets/team/lalit1.png";
import b from "../assets/team/mayankesh.jpeg";
import c from "../assets/team/ritika.jpg";
import d from "../assets/team/richa.jpg";
import e from "../assets/team/prakarsh.jpg";
import f from "../assets/team/harshg.jpg";
import g from "../assets/team/ss.jpg";
import h from "../assets/team/shrutiyadav.jpg";
import i from "../assets/team/ashutosh.jpg";
import j from "../assets/team/kajal.jpg";
import k from "../assets/team/sanjana.jpg";
import l from "../assets/team/harshv.jpg";
import m from "../assets/team/ishika.jpg";
import n from "../assets/team/astha.jpg";
import o from "../assets/team/akshay.jpg";
import p from "../assets/team/devansh.jpg";
import q from "../assets/team/sakshi.jpg";
import r from "../assets/team/sachin.jpg";
import s from "../assets/team/pretam.jpg";
import t from "../assets/team/asthar.jpg";
import u from "../assets/team/aditi.jpg";
import v from "../assets/team/samarpit.jpg";
import w from "../assets/team/preeti.jpg";
import x from "../assets/team/chirag.jpg";
import y from "../assets/team/sp.jpg";
import z from "../assets/team/mayank.jpg";
import aa from "../assets/team/shivank.jpg";



import sample from "../assets/team/sample.png";

function Team() {
  return (
    <Container fluid className="team-section">
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
              Meet our <strong className="blue">Team</strong> 
              <hr/>
            </h1>
            
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong className="purple">Chapter <span className="blue"> Leads</span></strong>
         <hr/>
         
         <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
         <Col md={3} className="team-card-bio team-card">
            <TeamCard
              imgPath={a}
              
              title="Lalit Mohan Tiwari"
              bio="Chair-person of ACM ABESEC Student's chapter."
             
              insta="https://www.instagram.com/lalitmohantiwari7/"
              linkedIn="https://www.linkedin.com/in/lalit-mohan-tiwari-316509176/"
              
            />
          </Col>
          
          <Col md={3} className="team-card-bio team-card">
            <TeamCard
              imgPath={b}
              isBlog={false}
              title="Mayankesh Mishra"
              bio="Vice Chair-person of ACM ABESEC Student's chapter."
              insta="https://instagram.com/mayankeshmishra/"
              linkedIn="https://www.linkedin.com/in/mayankesh-mishra-b70676191/"
              github="https://github.com/anonymousmayank"
            />
          </Col>
          <Col md={3} className="team-card-bio team-card">
            <TeamCard
              imgPath={c}
              isBlog={false}
              title="Ritika Malik"
              bio="Chair-person of ACM ABESEC Women's chapter."
              insta="https://www.instagram.com/ritikamalik_14/"
              linkedIn="https://www.linkedin.com/in/ritika-malik-246998184"
              github="https://github.com/14ritika"
            />
          </Col>
          <Col md={3} className="team-card-bio team-card">
            <TeamCard
              imgPath={d}
              isBlog={false}
              title="Richa Shrivastava"
              bio="Vice Chairman-person of ACM ABESEC Women's chapter."
              insta="https://www.instagram.com/richasrivastava_07/"
              linkedIn="https://www.linkedin.com/in/richa-srivastava71299/"
              github="https://github.com/richa1999"
            />
          </Col>
          
          
          
          
        
          
         
        
    </Row>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
         
        </Row>
        <h1 className="project-heading">
          <strong>Core <span className="blue">Team</span></strong> Members
        </h1>
        <hr></hr>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
        <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={e}
              isBlog={false}
              title="Prakarsh Sharma"
              // bio="CS 2nd year"
              insta=""
              linkedIn="https://www.linkedin.com/in/prakarsh7/"
              github="https://github.com/prakarsh7695"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={f}
              isBlog={false}
              title="Harsh Gupta"
              // bio="CS 2nd year"
              insta="www.instagram.com/gharshg29/"
              linkedIn="https://www.linkedin.com/in/gharshg29/"
              github="https://github.com/gharshg29/"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={g}
              isBlog={false}
              title="Shruti Singhal"
              // bio="CS 2nd year"
              insta="https://www.instagram.com/_.shruti_singhal._/"
              linkedIn="https://www.linkedin.com/in/shruti-singhal-8358191a0/"
              github="https://github.com/shruti29s"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={h}
              isBlog={false}
              title="Shruti Yadav"
              // bio="CS 2nd year"
              insta="https://www.instagram.com/shruti.__yadav/"
              linkedIn="https://www.linkedin.com/in/shruti-yadav-28a249196"
              github="https://github.com/shruti01052002"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={j}
              isBlog={false}
              title="Kajal Chaudhary"
              insta="Instagram.com/kajalchaudhary1611"
              linkedIn="https://www.linkedin.com/in/kajal-chaudhary-a786001b7"
              github="https://github.com/kajalchaudhary1611"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={k}
              isBlog={false}
              title="Sanjana Jain"
             
              insta="https://www.instagram.com/sanjana_jain21/"
              linkedIn="https://www.linkedin.com/in/sanjana-jain-5633061b5"
              github="https://github.com/sanjana1391"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={m}
              isBlog={false}
              title="Ishika Verma"
              insta="https://www.instagram.com/ishikaverma372"
              linkedIn="ishiverma1999@gmail.com"
              github="https://github.com/ishika372"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={n}
              isBlog={false}
              title="Aastha Gupta"
              insta="https://www.instagram.com/cerieaastha/"
              linkedIn="https://www.linkedin.com/in/aastha-gupta-90b7701ab"
              github="https://github.com/aasthagupta30"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={o}
              isBlog={false}
              title="Akshay Giri"
              insta="https://instagram.com/mr._imperator"
              linkedIn="https://www.linkedin.com/in/akshay-giri-b6a9a0203"
              github="https://github.com/CaesarKing-source"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={p}
              isBlog={false}
              title="Devansh Bajaj"
              insta="https://instagram.com/devanshbajaj"
              linkedIn="https://linkedin.com/in/devansh21db"
              github="https://github.com/DevanshBajaj"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={r}
              isBlog={false}
              title="Sachin Thakur"
              insta="https://www.instagram.com/sachin_jaihind_/"
              linkedIn="https://www.linkedin.com/in/sachin-thakur-code/"
              github="https://github.com/sachinthakur-code"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={q}
              isBlog={false}
              title="Sakshi Sah"
              insta="https://instagram.com/_sakshisah_"
              linkedIn="https://www.linkedin.com/in/sakshi-sah-86891b1b3"
              github="https://github.com/sakshisah18"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={s}
              isBlog={false}
              title="Preetam Chaurasiya"
              insta="https://www.instagram.com/preetamchaux/"
              linkedIn="https://www.linkedin.com/in/preetam-kumar-chaurasiya-263745138"
              github="https://github.com/Preetamkumarchauasiya"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={l}
              isBlog={false}
              title="Harsh Verma"
              insta="https://www.instagram.com/harsh22.exe/"
              linkedIn="https://www.linkedin.com/in/harsh-v-5209bb14a/"
              github="https://github.com/TheLameOne"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={t}
              isBlog={false}
              title="Astha Rai"
              insta="https://www.instagram.com/astha_011"
              linkedIn="https://www.linkedin.com/in/astha-rai-16594b1b7"
              github="https://github.com/astha114"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={u}
              isBlog={false}
              title="Aditi Agrawal"
              insta="https://instagram.com/_aditi__30?utm_medium=copy_link"
              linkedIn="https://www.linkedin.com/in/aditi-agrawal-870aa91b2"
              github="https://github.com/aditi30-code"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={v}
              isBlog={false}
              title="Samarpit Dua"
              insta="https://instagram.com/samarpit_dua"
              linkedIn="https://www.linkedin.com/in/samarpit-dua-22068b176/"
              github="https://github.com/Samarpitdua"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={w}
              isBlog={false}
              title="Preeti Varshneyr"
              insta="https://www.instagram.com/preeti__varshney/"
              linkedIn="https://www.linkedin.com/in/preeti-varshney-7398781a7/"
              github="https://github.com/PreetiVarshney"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={x}
              isBlog={false}
              title="Chirag Bawa"
              insta="https://www.instagram.com/chirag_bawa/"
              linkedIn="https://www.linkedin.com/mwlite/in/chirag-bawa-5b1b2a190"
              github="https://www.linkedin.com/mwlite/in/chirag-bawa-5b1b2a190"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={y}
              isBlog={false}
              title="Sameeksha Purwar"
              insta="https://www.instagram.com/sameekshapurwar/"
              linkedIn="https://www.linkedin.com/in/sameeksha-purwar-44b0861a8/"
              github="
              https://github.com/sameeksha-purwar"
            />
          </Col>
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={i}
              isBlog={false}
              title="Aashutosh Jha"
              // bio="CEIT 2nd year"
              insta="https://www.instagram.com/bankai_ashiyutoshiyuziya/"
              linkedIn="https://www.linkedin.com/in/aashutosh-jha-22a318192"
              github="https://github.com/aashutosh2102"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={z}
              isBlog={false}
              title="Mayank Kumar Rai"
              insta="https://www.instagram.com/mayank__kumar__rai/"
              linkedIn="https://www.linkedin.com/in/mayank-rai-b985031b7/"
              github="https://www.linkedin.com/in/mayank-rai-b985031b7/"
            />
          </Col>
         
          <Col md={3} className="member-team-card">
            <TeamCard
              imgPath={aa}
              isBlog={false}
              title="Shivank Pandey"
              insta="https://www.instagram.com/shivank_pandey_1"
              linkedIn="https://www.linkedin.com/in/shivank-pandey-84367b1a7/"
              github="https://github.com/Shivank23"
            />
          </Col>
         
          
        
          
         
        
    </Row>
    
    
 
       
      </Container>
    </Container>
  );
}

export default Team;
