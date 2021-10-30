import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Book from '../../Book/Book';
import TourInfo from '../../Shared/TourInfo/TourInfo';

const TourDetails = () => {
    const { tourId } = useParams()
    const [tour,setTour]= useState({})
    ///load specific tour
   useEffect(()=>{
    axios.get(`http://localhost:5000/tour/${tourId}`)
    .then(res => {
        setTour(res.data);
    })
   },[tourId])
    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col sm={12} md={8} lg={8} className="mt-3">
                        {
                            !tour ? "" :<div>
                                <img className="img-fluid rounded" src={tour?.img1} alt="" />
                            <div className="text-start">
                                <h1 className="mb-3 mt-5">{tour?.title}</h1>
                                <TourInfo/>
                                <h4 className="my-3">Overview</h4>
                            <p className="text-secondary">{tour?.desc}</p>
                            </div>
                            </div>
                        }
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <Book/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourDetails;