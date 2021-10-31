import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Tour from './Tour/Tour';

const TourPack = () => {
    const [isLoading, setIsLoading] = useState(true)
  
    
  
    const [tours, setTours] = useState([])
    ///load all tours 
    useEffect(() => {
        axios.get('http://localhost:5000/allTour')
            .then(res => {
                if (res.data) {
                    setTours(res.data)
                    setIsLoading(false)
                }
                else {
                    setIsLoading(true)
                }
        })
   },[])
    return (
        <div style={{position: 'relative'}}>
        {
                isLoading ? <div className="py-5">
                    <Spinner 
                    animation="grow" className="primaryColor spinnerStyle"></Spinner>
           </div> : <Container className="my-5">
                        <div className="mb-5 ">
                        <h5 className="primaryColor mt-5">Choose Your Package</h5>
            <h1 >Select Your Best Package <br /> For Your Travel</h1>
                        </div>
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
            }
        </div>
    );
};

export default TourPack;