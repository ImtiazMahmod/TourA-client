import React from 'react';
import { useParams } from 'react-router';

const TourDetails = () => {
    const { tourId } = useParams()
    console.log(tourId);
    return (
        <div>
            
        </div>
    );
};

export default TourDetails;