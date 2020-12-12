import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

export default class Festivals extends Component {
    render() {
        return (
            <div className="intro odd-section">
                <Container className="padding">
                    <Row>
                        <   div className="col-12 col-md-6 order-md-last  Subheading">
                            <div className="caption">
                                <h1 className="display-2">How to Apply?</h1>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 content pt-5">
                            <Fade right>
                            <p>
                                Find an Organization you think has a project you like. 
                                Choose the project which falls under your tech stack.
                                Make proposals and contact mentors.
                            </p>
                            </Fade>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
