import React from 'react';
import { useParams } from 'react-router-dom';
import tourist_spots from '../Constants/tourist_spots';

function TouristSpot(props) {

    let {tourist_spot_id} = useParams();

    return (
        <div className="even-section padding">
            <div className="section-title">
                <h1>{tourist_spots[tourist_spot_id]['name']}</h1>
                <div className="underline"></div>
            </div>
            <div className="padding">
                <iframe className="streetview"title="image 1" src={tourist_spots[tourist_spot_id]['street_view_url']}  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    );
}

export default TouristSpot;