import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark p-5 mt-5">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <img className="img-fluid" src="https://i.ibb.co/TgYrddh/logo.png" alt="" />
                        <p className="text-secondary">
                        TourA is the leading force that grows and sustains travel and protects the freedom to travel. 
                        </p>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4 className="primaryColor  mt-2">Contact Us</h4>
                        <div  className="text-secondary mt-3">
                            <p><FontAwesomeIcon icon={faPhone } /> +01852-1111122</p>
                        </div>
                        <div>
                            <p   className="text-secondary"><FontAwesomeIcon icon={faMailBulk } /> support@toura.com</p>
                        </div>
                        <div>
                            <p  className="text-secondary"><FontAwesomeIcon icon={faLocationArrow} /> Dhaka, Bangladesh</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4 className="primaryColor mt-2">Support</h4>
                        <div>
                        <Link to="/about"  className="text-secondary mt-3 d-block text-decoration-none">About Us</Link>
                        <Link to="/contact"  className="text-secondary  d-block text-decoration-none">Contact Us</Link>
                        <Link to="/tourPackages"  className="text-secondary  d-block text-decoration-none">Packages</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4 className="primaryColor mt-2">Follow Us</h4>
                        <FontAwesomeIcon className="text-secondary mx-2 mt-3" icon={faFacebook}/>
                        <FontAwesomeIcon className="text-secondary mx-2" icon={faTwitter}/>
                        <FontAwesomeIcon className="text-secondary mx-2" icon={faLinkedin}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;