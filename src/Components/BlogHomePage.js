import React, { Component } from 'react'
import { Container, Jumbotron, Card, Button, Form} from 'react-bootstrap'

export default class BlogHomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="text-center">
                    <div className="jumbo-text">
                        <h1 className="display-1">Blog Page</h1>
                    </div>
                </Jumbotron>
                <Container>
                    <div className="padding">
                        <Card>
                            <Card.Header><h1>Article Heading 1</h1></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                                </blockquote>
                                <Button href="/blog" variant="primary">Check Full Article</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="padding">
                        <Card>
                            <Card.Header><h1>Article Heading 1</h1></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                                </blockquote>
                                <Button href="/blog" variant="primary">Check Full Article</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="padding">
                        <Card>
                            <Card.Header><h1>Article Heading 1</h1></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                                </blockquote>
                                <Button href="/blog" variant="primary">Check Full Article</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>

                <div className="odd-section padding">
                    <Container>
                        <h1>Write a blog</h1>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}
