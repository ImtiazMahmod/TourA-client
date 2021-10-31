import React from 'react';
import './Banner.css'

const Banner = ({children}) => {
    return (
        <div className="bannerStyle">
             <div className="bannerContainer">
               <div className="bannersubtitle mb-0">{children[1]}</div>
               <div className="bannertitle">{children[0]}</div>
            </div>
        </div>
    );
};

export default Banner;