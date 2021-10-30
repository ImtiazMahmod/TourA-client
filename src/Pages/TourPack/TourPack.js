import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Tour from './Tour/Tour';

const TourPack = () => {
    const [tours, setTours] = useState([])
    ///load all tours 
    useEffect(() => {
        axios.get('http://localhost:5000/allTour')
    .then(res=>setTours(res.data))
   },[])
    return (
        <Container className="my-5">
            <Row  xs={1}  className="g-4" sm={1} md={2} lg={4}>
                {
                    tours?.map(tour =>
                        <Col key={tour?._id}>
                        <Tour tour={tour}></Tour>
                        </Col>
                        )
                }
            </Row>
        </Container>
    );
};

export default TourPack;