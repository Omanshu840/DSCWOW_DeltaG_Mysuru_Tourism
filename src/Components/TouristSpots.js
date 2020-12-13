import React, { Component } from 'react'
import { Button} from 'react-bootstrap'
import tourist_spots from '../Constants/tourist_spots'
import Fade from 'react-reveal/Fade';

export default class TouristSpots extends Component {
    render() {
        return (
            <div className="tourist-spots even-section padding">
                <Fade top>
                    <div className="section-title">
                        <h1>Tourist Spots</h1>
                        <div className="underline"></div>
                    </div>
                </Fade>
                        
                    {tourist_spots.map((item, index) => {

                        const streetViewUrl = `/tourist-spot/${item.id}`;
                        const cssClass = (index%2) ? "col-md-6 img-tourist-spots" : "col-md-6 order-md-last img-tourist-spots";
                        const cssClass2 = (index%2) ? "even-section" : "odd-section";

                        return (
                            // <div className="card">
                                    <div className={cssClass2}>
                                        <div className="container">
                                            <div className="row padding">
                                            <Fade top>
                                                <div className={cssClass}>
                                                    <img src={item.img_Link} alt="..."></img>
                                                </div>
                                                <div className="col-md-6">
                                                    <h2 className="tourist-spot-heading py-4">{item.name}</h2>
                                                    <h5 className="py-2">Distance from City Center {item.distance_from_City_centre}</h5>
                                                    <p>{item.description}</p>
                                                    <Button href={streetViewUrl}>View Street View</Button>
                                                </div>
                                            </Fade>
                                            </div>
                                        </div>
                                    </div>
                            // </div>
                        )
                    })}
                        
                </div>
        )
    }
}
