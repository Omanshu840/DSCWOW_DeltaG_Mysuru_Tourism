import React from 'react';
import { useParams } from 'react-router-dom';

function TouristSpot(props) {

    let {tourist_spot_id} = useParams();

    return (
        <div>
            <h1>Tourist Spot {tourist_spot_id}</h1>
        </div>
    );
}

export default TouristSpot;