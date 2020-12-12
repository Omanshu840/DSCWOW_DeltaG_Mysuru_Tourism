import React, { Component } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import tourist_spots from '../Constants/tourist_spots'

export default class TouristSpots extends Component {
    render() {
        return (
            <div className="tourist-spots even-section padding">
                <h2>Tourist Spots</h2>
                <div className="container">
                        
                    {tourist_spots.map((item, index) => {

                        const streetViewUrl = `/tourist-spot/${item.id}`;

                        return (
                            <div className="card">
                                <div className="row">
                                
                                    <div className="col-md-6">
                                        <img src={item.img_Link} alt="..."></img>
                                    </div>
                                    <div className="col-md-6">
                                        <h2>{item.name}</h2>
                                        <h5>Distance from City Center {item.distance_from_City_centre}</h5>
                                        <p>{item.description}</p>
                                        <Button href={streetViewUrl}>View Street View</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                        
                </div>
            </div>
        )
    }
}
