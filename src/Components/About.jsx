// About.js
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Me from "../img/serge Image.jpg";
import MongoDBImage from "../img/mongodb.png";
import NodeImage from "../img/node.png";
import htmlImage from "../img/html.png";
import cssImage from "../img/css.png";
import FigmaImage from "../img/figma.png";
import GomyCode from "../img/gmc.png";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import googleImage from "../img/google.png";
import { IoRocketOutline } from "react-icons/io5";
import { Fade, Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <div
      id="About"
      className="container d-flex flex-column align-items-center  text-light  pt-5"
    >
      <Slide direction="right" className="text-center">
        <h2 className="B89 fs-1 textlightbrand align-self-center  shadow-lg">
          About me
        </h2>
        <p className=" align-self-center">
          You can find below more information about me, my Stack and my Exp
        </p>
      </Slide>

      <Container className="d-flex flex-column gap-1  ">
        <Slide direction="down" className=" align-self-center text-center">
          <img
            src={Me}
            alt="Ma  de profil jolie"
            className="img-fluid col-lg-4 col-6 rounded rounded-circle bgBrand2 p-2 bouncy"
          />
        </Slide>
        <hr />
        <Fade cascade>
          <Row lg={2}>
            <Col className="">
              <Slide direction="left">
                <h2 className="textlightbrand">
                  {" "}
                  <AiTwotoneSafetyCertificate /> FULLSTACK Web Developer
                </h2>
                <br />
                <h5 className="textlightbrand">
                  {" "}
                  Développeur full stack certifié passionné du Web et
                  l'Informatique toujours à là recherche des connaissances
                  Développement backend et frontend de sites et applications
                  web. Compréhension des besoins utilisateurs et création d’un
                  cahier des charges. Orchestration du déploiement
                  d’applications via des outils de déploiement continu.
                  Maintenance, correctif de bugs et amélioration des sites ou
                  applications web. Excellente gestion du temps, respect
                  scrupuleux des délais. Adaptabilité, capacité à travailler sur
                  des sujets/univers divers.
                </h5>

                <h6>Personal Infos :</h6>

                <Row lg={2} xs={1}>
                  <Col>
                    <ul>
                      <li> Birthday:02 Août 1984</li>
                      <li>Phone:+212 607 576 502</li>
                      <li>City:Rabat, Morrocco</li>
                      <li>Age: 39</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Degree: Auto Entrepreneur</li>
                      <li>Email:sergepetcha@gmail.com</li>
                      <li>Freelance: Available</li>
                    </ul>
                  </Col>

                  <h5 className="textlightbrand">
                    {" "}
                    <IoRocketOutline /> Aug, 2020 -, 2024 technologies. I
                    developed applications and programs that made the work
                    amazing
                  </h5>
                  <h5 className="textlightbrand">
                    {" "}
                    Worked on Windows 11 solutions for a seamless online
                    experience. Designed the control panel
                  </h5>
                </Row>
              </Slide>
            </Col>

            <Col>
              <Slide direction="right">
                <ul>
                  <li>
                    <h2 className="textlightbrand">
                      <GrCertificate /> Web Developer
                    </h2>
                    <p> 2020 - 2024 </p>
                    <p>
                      Si la formation d'un développeur informatique est
                      importante pour apprendre les langages informatiques
                      nécessaires à l’exercice de cette profession, l’expérience
                      professionnelle l’est tout autant, voire plus ! En effet,
                      mon métier de développeur s’apprend beaucoup sur le
                      terrain, en se confrontant aux difficultés que je
                      rencontre lors de la conception d’un programme, d’un
                      logiciel ou d’une application. Les langages et les outils
                      évoluent en permanence, et je me dois donc d’être toujours
                      à la page pour être le plus efficace possible dans les
                      missions qui me seront attribuées. je peux exercer mon
                      métier dans de nombreux domaines : informatique
                      industrielle, informatique de gestion, télécommunications,
                      banques, assurances… mais aussi dans les jeux vidéos, par
                      exemple ! dans les SSII, les Sociétés de services et
                      d'ingénierie informatique, je travail à la commande pour
                      les entreprises. Ainsi, je suis capable de travailler pour
                      tous types d’entreprises, sur des projets très différents
                      ! Pour faire ressortir cette richesse dans vos projets,
                      n’hésitez pas à m'expliquer brièvement les projets sur
                      lesquels vous voulez travaillé et dans quel secteur. Mes
                      références sont disponibles sur demande.
                    </p>
                  </li>
                  <li>
                    <h2 className="textlightbrand">
                      {" "}
                      <img src={googleImage} alt="Google Logo" /> Software
                      Engineer, Google
                    </h2>
                    <p>Sept, 2020 - Present</p>
                    <p> Worked on Google Maps.</p>
                    <p> Reduced load times by 50%.</p>
                  </li>
                </ul>
              </Slide>
            </Col>
          </Row>
        </Fade>
      </Container>

      <Container className="text-center">
        <h2>Experience </h2>
        <br />
        <div className="hori-timeline " dir="ltr">
          <ul className="list-inline events">
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={htmlImage} alt="HTML Logo" />
                <div className="event-date bg-success fs-bold">2016</div>
                <h5 className="font-size-16">Developer</h5>
                <p>HTML HTML5</p>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={cssImage} alt="CSS Logo" />
                <div className="event-date bg-danger fs-bold">2017</div>
                <h5 className="font-size-16">Web Developer</h5>
                <p>CSS</p>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={FigmaImage} alt="Figma" />
                <div className="event-date bg-dark  fs-bold">2018</div>
                <h5 className="font-size-16">Real Time Analyst</h5>
                <p>Figma Maroc</p>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={NodeImage} alt="Node.js Logo" />
                <div className="event-date bg-warning fs-bold">2019</div>
                <h5 className="font-size-16"> Node.js Performer</h5>
                <p>Clinic Doctor</p>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={MongoDBImage} alt="MongoDB Logo" />
                <div className="event-date bg-info fs-bold">2020</div>
                <h5 className="font-size-16">
                  WorkForce Manager & Developer Fullstack
                </h5>
                <p>MongoDB</p>
              </div>
            </li>
            <li className="list-inline-item event-list">
              <div className="px-4">
                <img src={GomyCode} alt=" MonImage cc 4" className="ExpImg " />
                <div className="event-date bg-info fs-bold">2023</div>
                <h5 className="font-size-16">
                  Formation Full Stack Developer Certifiée
                </h5>
                <p>GoMyCode Maroc</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
