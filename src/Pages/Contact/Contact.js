import { faFacebook, faLinkedin, faStaylinked, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Shared/Banner/Banner';

const Contact = ({children}) => {
    return (
        <div>
            <Banner>
                <h3>Contact Us</h3>
                <p>Get in Touch</p>
            </Banner>
            <Container className="my-5">    
            <Row className="mx-auto">
                <div className="my-3">
                    
                </div>
     <Col sm={12} md={6} lg={3}  className="info border rounded mx-auto p-5" >
     <FontAwesomeIcon className="infoIcon " icon={faLocationArrow} />
                    <h3  >Address</h3>
           
      <h5 className="text-secondary">Dhaka, Bangladesh</h5>
           
      </Col>
      <Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto" >
            <FontAwesomeIcon className="infoIcon  " icon={faMailBulk} /> <h3  >Email & Phone</h3>
            <h5 className="text-secondary">support@toura.com</h5>
            <h5 className="text-secondary">01852-333888</h5>
               
        </Col>
            
      <Col sm={12} md={6} lg={3}  className="info  border rounded  p-5  mx-auto" >
                        <FontAwesomeIcon className="infoIcon" icon={faStaylinked} />
                        <h3  >Social Connection</h3>
                        <FontAwesomeIcon className="text-secondary mx-2 mt-3" icon={faFacebook}/>
                        <FontAwesomeIcon className="text-secondary mx-2" icon={faTwitter}/>
                        <FontAwesomeIcon className="text-secondary mx-2" icon={faLinkedin}/>
              
        </Col>
        <Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto" >
                        <FontAwesomeIcon className="infoIcon " icon={faClock} />
                        <h3  >Open Hour</h3>
            <h5 className="text-secondary">Sat - Thu At
10.00Am to 10.00PM</h5>
                          
           
        </Col>
    </Row>
    </Container>
        </div>
    );
};

export default Contact;