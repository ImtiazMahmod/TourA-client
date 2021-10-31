import React from 'react';
import TouraInfo from '../../Shared/TouraInfo/TouraInfo';
import TourPack from '../../TourPack/TourPack';
import Reviews from '../../TravelerReviews/Reviews';
import HomeBanner from '../HomeBanner/HomeBanner';
import './Home.css'

const Home = () => {
    
    return (
        <div >
            
            <HomeBanner />
            <div className="mb-5 pb-5">
            <h5 className="primaryColor mt-5">Choose Your Package</h5>
            <h1 >Select Your Best Package <br /> For Your Travel</h1>
            <TourPack />
            </div>
            <div className="tourInfo">                
            <TouraInfo/>           
            </div>
            <Reviews/>
        </div>
    );
};

export default Home;