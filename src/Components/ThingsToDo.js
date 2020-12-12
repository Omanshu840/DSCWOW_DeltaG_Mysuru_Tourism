import React, { Component } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import thingstodo from '../Constants/thingstodo'
import Fade from 'react-reveal/Fade';

export default class ThingsToDo extends Component {
    render() {
        return (
            <div className="padding even-section things-to-do-section">
                        <div className="section-title even-section">
                            <h1>Things to Do</h1>
                            <div className="underline"></div>
                        </div>
                    {thingstodo.map((item, index) => {
                        const cssClass1 = (index%2) ? "col-md-6" : "col-md-6 order-md-last";
                        const cssClass2 = (index%2) ? "even-section padding" : "odd-section padding";
                        return(
                            <Fade top>
                            <div className={cssClass2}>
                            <Container>
                                <Row>
                                    <div className={cssClass1}>
                                        <img className="img-tds" src={item.imgLink} alt=".."></img>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="p-5 tds-heading">{item.name}</h3>
                                        <p className="p-5">{item.description}</p>
                                    </div>
                                </Row>
                            </Container>
                            </div>
                            </Fade>
                        )
                    })}
            </div>
        )
    }
}
