import React, { Component } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import tourist_spots from '../Constants/tourist_spots'

export default class TouristSpots extends Component {
    render() {
        return (
            <div className="tourist-spots even-section padding">
                <h2>Tourist Spots</h2>
                <div className="container">
                        <div className="row">
                            {tourist_spots.map((item, index) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="card card-blog">
                                            <div className="card-image">
                                                <a href="/"> <img className="img img-raised" src="http://adamthemes.com/demo/code/cards/images/blog01.jpeg"  alt="..." /> </a>
                                                <div className="ripple-cont"></div>
                                            </div>
                                            <div className="card-footer">
                                                <h2>{item.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
        
            </div>
        )
    }
}
