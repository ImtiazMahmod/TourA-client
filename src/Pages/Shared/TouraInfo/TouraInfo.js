import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faSmile, faUserShield, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TouraInfo.css'

const TouraInfo = () => {
    return (
        <Container className="my-5">    
            <Row className="mx-auto">
                <div className="my-3">
                    <h5 className="text-info text-decoration-underline mt-5">Why TourA</h5>
                    <h1 className=" text-light">Why You Are Travel With  <br /> TourA</h1>
                </div>
     <Col sm={12} md={6} lg={3}  className="info mx-auto p-5" >
     <FontAwesomeIcon className="infoIcon " icon={faUserTie} />
           
      <h5>2000+ Our worldwide guide</h5>
           
      </Col>
      <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto" >
            <FontAwesomeIcon className="infoIcon  " icon={faHandshake} />
            <h5>100% trusted travel agency</h5>
               
        </Col>
            
      <Col sm={12} md={6} lg={3}  className="info  p-5  mx-auto" >
        <FontAwesomeIcon className="infoIcon" icon={faUserShield} />
              <h5>10+ year of travel experience</h5>
              
        </Col>
        <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto" >
        <FontAwesomeIcon className="infoIcon " icon={faSmile} />
            <h5>90% of our traveller happy</h5>
                          
           
        </Col>
    </Row>
    </Container>
    );
};

export default TouraInfo;