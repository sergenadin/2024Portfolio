import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Fade, Slide } from "react-awesome-reveal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import sergeImage from "../img/serge Image.jpg";
import { RiMailSendLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const googleColor = "#4285F4"; // Couleur de Google
const githubColor = "#333"; // Couleur de GitHub
const instagramColor = "#E4405F"; // Couleur d'Instagram
const whatsappColor = "#25D366"; // Couleur de WhatsApp
const linkedinColor = "#0077B5"; // Couleur de LinkedIn
const position = [34.0042117, -6.8586604];

const Contact = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    html: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true during the request
      const response = await axios.post(
        "https://apimailler-portfolio.vercel.app/api/mailing",
        formData
      );

      setResponseMessage(response.data.message); // Assuming the server responds with a 'message' property
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage(
        "Error sending email. Please check the console for details."
      );
    } finally {
      setLoading(false);
      // Set loading back to false after the request is complete
    }
  };

  return (
    <div id="Contact" className="pt-5">
      <Slide
        direction="down"
        className="d-flex flex-column align-items-center p-2 text-light text-center"
      >
        <h2 className="B89 fs-1 textlightbrand align-self-center  shadow-lg">
          Contactez-nous
        </h2>
        <p>N'hésitez pas à nous contacter pour toute question ou demande de renseignements.</p>
        <div className="container textlightbrand">
          <Row lg={2} xs={1} className="text-start p-2 d-flex align-items-start">
            <Col className="fs-5 d-flex flex-column justify-content-end  rounded ">
              <Form onSubmit={handleSubmit} className="  fs-5 text-center">
                <Fade cascade>
                  <Form.Group controlId="to">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="to"
                      placeholder="votre@email.com"
                      className="bg-light bg-opacity-50"
                      value={formData.to}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="subject">
                    <Form.Label>Objet:</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Intéressé par une collaboration ?"
                      className="bg-light bg-opacity-50"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="html">
                    <Form.Label>Votre message :</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="html"
                      value={formData.html}
                      placeholder="Description du projet ou de l'idée"
                      className="bg-light bg-opacity-50"
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Fade>
                <hr />
                <button
                  type="submit"
                  className=" BtnCardProject2 fw-bold textlightbrand"
                  disabled={loading}
                >
                  {loading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer un Email <RiMailSendLine />
                    </>
                  )}
                </button>
              </Form>
              <p>{responseMessage}</p>
            </Col>
            <Col className="fs-5 d-flex flex-column justify-content-end">
              <Fade cascade>
                <h5>Ma localisation</h5>
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: "242px" }}
                  className="rounded"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      <div>
                        <h6>Serge Nadin</h6>
                        <p>Ville : Rabat</p>
                        <p>Adresse : Haynada 1, Rue 57</p>
                        <p>Tél : 0607576502</p>
                        <p>Profession : Développeur Web</p>
                        <img src={sergeImage} alt="Serge" style={{ maxWidth: "100%" }} />
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </Fade>
              <hr />
              <div className="social-links">
                <div className="networks">
                  <div className="netbox">
                    <NavLink
                      to={"https://www.google.com/maps/place/Serge+Nadin,+City+Rabat,+Haynada+1+Rue+57"}
                      target="_blank"
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="Google"
                      style={{ color: googleColor }}
                    >
                      <AiOutlineGoogle />
                    </NavLink>
                    <NavLink
                      to={"https://github.com/sergenadin/"}
                      target="_blank"
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="GitHub"
                      style={{ color: githubColor }}
                    >
                      <FaGithub />
                    </NavLink>
                    <NavLink
                      to={"https://www.instagram.com/mark_frost333?utm_source=qr&igsh=ZDExYjZkNGI0OA=="}
                      target="_blank"
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="Instagram"
                      style={{ color: instagramColor }}
                    >
                      <FaInstagram />
                    </NavLink>
                    <NavLink
                      to={"https://whatsapp.com/dl/code=c3oyBV7X1u"}
                      target="_blank"
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="WhatsApp"
                      style={{ color: whatsappColor }}
                    >
                      <FaWhatsapp />
                    </NavLink>
                    <NavLink
                      to={"https://www.linkedin.com/in/ets-petcha-freres-a854b5253/"}
                      target="_blank"
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="LinkedIn"
                      style={{ color: linkedinColor }}
                    >
                      <FaLinkedin />
                    </NavLink>
                    <NavLink
                      to={"https://www.facebook.com/serge.nadin?mibextid=ZbWKwL"}
                      target="_blank"
                      className="icon BtnCardProject2 fw-bold fs-3"
                      data-tip="Facebook"
                      style={{ color: "#1877F2" }} // Couleur de Facebook
                    >
                      <FaFacebook />
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;
