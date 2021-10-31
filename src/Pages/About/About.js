import React from 'react';
import Banner from '../Shared/Banner/Banner';
import TouraInfo from '../Shared/TouraInfo/TouraInfo';
import Reviews from '../TravelerReviews/Reviews';

const About = () => {
    return (
        <div>
            <Banner>
                <h1>About Us</h1>
                <p>Happy travelling</p>
            </Banner>
            <div className="tourInfo">
                <TouraInfo />
            </div>
            <Reviews/>
        </div>
    );
};

export default About;