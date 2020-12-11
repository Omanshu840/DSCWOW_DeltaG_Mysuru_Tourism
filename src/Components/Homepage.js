import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import CustomCorousel from './CustomCarousel';
import Hero from './Hero';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Hero/>
                <CustomCorousel/>

                <div className="odd-section padding">
                    <Container>
                        <h1>Things to Do</h1>
                        <Row>
                            <Card className="col-4">
                                <Card.Img variant="top" src={require('../img/jumboImg.jpg')} />
                                <Card.Body>
                                    <Card.Title>Subtitle</Card.Title>
                                    <Card.Text>
                                        Some info
                                    </Card.Text>
                                    <Button variant="primary" href="tourist-spot/1">Check Out</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                        <a href="/tourist-spots"><p>More</p></a>
                    </Container>
                </div>


                <div className="even-section padding">
                    <div className="section-title">
                        <h1>Festivals</h1>
                    </div>
                <div className="Timeline">
                    <Container>
                        <div className="timeline-item-left">
                            <div className="timeline-img">
                                
                            </div>
                            <div className="timeline-content">
                                <div className="date">1 Jan 2020</div>
                                <img src={require('../img/jumboImg.jpg')} className="act-img" alt="..."/>
                                <h3>Title</h3>
                                <h4>Subtitle</h4>
                            </div>
                        </div>
                        <div className="timeline-item-right">
                            <div className="timeline-img">
                                
                            </div>
                            <div className="timeline-content">
                                <div className="date">1 Jan 2020</div>
                                <img src={require('../img/jumboImg.jpg')} className="act-img" alt="..."/>
                                <h3>Title</h3>
                                <h4>Subtitle</h4>
                            </div>
                        </div>
                        <div className="timeline-item-left">
                            <div className="timeline-img">
                                
                            </div>
                            <div className="timeline-content">
                                <div className="date">1 Jan 2020</div>
                                <img src={require('../img/jumboImg.jpg')} className="act-img" alt="..."/>
                                <h3>Title</h3>
                                <h4>Subtitle</h4>
                            </div>
                        </div>
                    </Container>
            </div>
                </div>

                <div className="odd-section padding">
                    <Container>
                        <Card>
                            <Card.Header><h1>Blog Post</h1></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                                </blockquote>
                                <Button href="/blog" variant="primary">Check Full Article</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Homepage;
