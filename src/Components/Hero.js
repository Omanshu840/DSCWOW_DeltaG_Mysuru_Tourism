import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

export default class Hero extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="text-center">
                    <Fade top>
                        <div className="jumbo-text">
                            <h1 className="display-1">Mysuru</h1>
                            <h2>Cultural capital of Karnataka</h2>
                        </div>
                    </Fade>
                </Jumbotron>
                <div className="odd-section padding">
                    <Container>
                    Popularly known as the ‘Cultural capital of Karnataka’, Mysore is a place that beautifully blends splendour of history with the living vibrancy of the traditions and culture which is reflected in the lives of its residents. All this is accompanied by the serenity of nature, making Mysore a dream destination of every travel enthusiasts. Mysore is known with many names such as Garden City, Ivory City, City of Yoga and City of Palace. Living up to every name which has been bestowed on it, Mysore should be on every traveller priority list. Mysore tourism is indeed a holiday idea that caters to everyone.
                    </Container>
                </div>
            </div>
        )
    }
}
