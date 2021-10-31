import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import travellers from './traveller';
import './Review.css'

const Reviews = () => {
    
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          // className: "center",
          // centerMode: true,
          // centerPadding: "50px",
          adaptiveWidth: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
  };
  
    return (
        <Container className="my-5 py-5">
            <div>
                    <h5 className="primaryColor text-decoration-underline mt-5">Our Traveller Say</h5>
                    <h1 className="mb-5">What Our Traveller Say<br />  About Us </h1>
                </div>
        <Slider {...settings}>
          
          {
            travellers.map(traveller =>
              <div key={traveller?.id} className="item">
                <div
                  style={{
                    borderRadius: "40px 40px 0px 0px",
                    height: '22rem'
                  }}
                  className="d-flex justify-content-center align-items-center flex-column shadow">
                  <img height="100" width="100" className="my-3 img-fluid rounded-circle  " src={traveller?.img} alt="" />
                  
                  <h4>{traveller?.name}</h4>
                   <h5 className="text-secondary">Traveller</h5>
                  <div className="d-flex justify-content-start">
                  <img className="my-2" height="30" src="https://i.ibb.co/s22TGPm/quote-rwview.png" alt="" />
                  </div>
                  <p className="text-secondary">{traveller?.review}</p>
                  
              </div>
            </div>
              )
         }
        
          
        </Slider>
        
      </Container>
    );
};

export default Reviews;