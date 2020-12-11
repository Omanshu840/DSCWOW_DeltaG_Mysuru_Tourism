import React, { Component } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'

export default class ThingsToDo extends Component {
    render() {
        return (
            <div className="even-section padding">
                <h2>Things To Do</h2>
                <Container>
                    <Row>
                        <Card className="col-4 p-2">
                            <Card.Header><h3>Tourist Spot 1</h3></Card.Header>
                            <Card.Body>
                                <Card.Title>Subtitle</Card.Title>
                                <Card.Text>
                                    Some info
                                </Card.Text>
                                <Button variant="primary" href="tourist-spot/1">Check Out</Button>
                            </Card.Body>
                        </Card>
                        <Card className="col-4 p-2">
                            <Card.Header><h3>Tourist Spot 2</h3></Card.Header>
                            <Card.Body>
                                <Card.Title>Subtitle</Card.Title>
                                <Card.Text>
                                    Some info
                                </Card.Text>
                                <Button variant="primary" href="tourist-spot/2">Check Out</Button>
                            </Card.Body>
                        </Card>
                        <Card className="col-4 p-2">
                            <Card.Header><h3>Tourist Spot 3</h3></Card.Header>
                            <Card.Body>
                                <Card.Title>Subtitle</Card.Title>
                                <Card.Text>
                                    Some info
                                </Card.Text>
                                <Button variant="primary" href="tourist-spot/3">Check Out</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}
