import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLanguage, faUsersCog, faWalking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TourInfo = () => {
    return (
        <div>
           <Container className="my-2 border-top border-bottom">    
            <Row className="mx-auto">
                
     <Col xm={6} md={6}  lg={3}  className="d-flex align-items-center info mx-auto p-2" >
     <FontAwesomeIcon className="primaryColor fs-2" icon={faClock} />
           
                        <div className="mx-2">
                        <h5>Duration</h5>
                        <p>Daily Tour</p>
      </div>
           
      </Col>
      <Col xm={6} md={6}  lg={3} className="d-flex align-items-center info mx-auto p-2" >
            <FontAwesomeIcon className="primaryColor fs-2 " icon={faWalking} />
                        <div  className="mx-2">
                        <h5>Tour Type</h5>
            <p>4 Days</p>  </div>
        </Col>
            
      <Col xm={6} md={6}  lg={3}  className="d-flex  align-items-center info mx-auto p-2" >
        <FontAwesomeIcon className="primaryColor fs-2" icon={faUsersCog} />
                        <div  className="mx-2">
                        <h5>Group Size</h5>
                        <p>30 People</p>
                        </div>
              
        </Col>
        <Col xm={6} md={6}  lg={3} className="d-flex align-items-center info mx-auto p-2" >
        <FontAwesomeIcon className="primaryColor fs-2 " icon={faLanguage} />
                        <div  className="mx-2">
                        <h5>Languages</h5>
            <p>Bangla, English</p>
            </div>
                          
           
        </Col>
    </Row>
    </Container>
        </div>
    );
};

export default TourInfo;