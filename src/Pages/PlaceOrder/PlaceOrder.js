import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Book from '../Book/Book';
import TourInfo from '../Shared/TourInfo/TourInfo';

const PlaceOrder = () => {
    const { tourId } = useParams()
    const [tour,setTour]= useState({})
    ///load specific tour
    useEffect(() => {
        axios.get(`http://localhost:5000/tour/${tourId}`)
        .then(res => {
            setTour(res.data);
        })
    }, [tourId])
    
    return (
        <div>
           <Container className="my-5">
                <Row>
                    
                        <Col sm={12} md={6} lg={8} className="mt-3">
                         
                        <div className="text-start">
                                 <Row>
                                    <Col sm={12} md={4}>
                                    <h1 className="fw-bold primaryColor my-3">{tour?.title}</h1>
                                    </Col>
                                    <Col className="text-secondary d-flex align-items-center" sm={12} md={4}>
                                    <h5 >৳{tour?.fee}/per person</h5>
                                    </Col>
                                </Row>
                            <TourInfo/>
                            <h5 className="my-3">Overview</h5>
                                <p className="text-secondary">{tour?.desc}</p>
                                <Row className="g-4">
                                    <Col sm={12} md={4}>
                                        <img style={{ height: "250px" }} className="img-fluid rounded" src={tour?.img1} alt="" />
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <img style={{ height: "250px" }} className="img-fluid  rounded" src={tour?.img2} alt="" />
                                    </Col>
                                    <Col  sm={12} md={4}>
                                        <img style={{ height: "250px" }} className="img-fluid  rounded" src={tour?.img3} alt="" />
                                    </Col>
                                </Row>
                            </div>
                            
                           
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Book/>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default PlaceOrder;