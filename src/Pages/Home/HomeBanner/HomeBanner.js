import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  
  return (
    <div className="banner">
      <Container >
        <Row>
        <Col  sm={12} md={6} className="bannerTitle p-5  text-start">
            <div  style={{ position: 'relative' }}>
              <div >
              <h1 >Amazing Tour In Madagaskar</h1>
        <h3>7Days,8 Night Tour</h3>
              <Link to="">
                <Button className="mt-4" variant="light">Book Now</Button>
              </Link>
            </div>
              <div >
              <img width="30%" className="bannerCompus" src="https://i.ibb.co/rHb1Q2B/compus.png" alt="" />
              </div>
        </div>
      </Col>
      <Col sm={12} md={6} >
        
      </Col>
      </Row>
      </Container>
      
        </div>
    );
};

export default HomeBanner;