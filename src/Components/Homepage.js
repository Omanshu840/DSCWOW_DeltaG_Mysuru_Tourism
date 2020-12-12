import React from 'react';
import { Button, Card, Container} from 'react-bootstrap';
import festivals from '../Constants/festivals';
import thingstodo from '../Constants/thingstodo';
import CustomCorousel from './CustomCarousel';
import Hero from './Hero';
import Fade from 'react-reveal/Fade';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Hero/>
                <CustomCorousel/>

                <div className="odd-section padding">
                    <Fade top>
                        <div className="section-title">
                            <h1>Things to Do</h1>
                            <div className="underline"></div>
                        </div>
                    </Fade>
                        <div className="container">
                            <div className="row">
                                {thingstodo.map((item, index) => {
                                    return (
                                        <Fade top>
                                        <div className="col-md-4">
                                            <div className="card card-blog">
                                                <div className="card-image">
                                                    <a href="/"> <img className="img img-raised" src={item.imgLink}  alt="..." /> </a>
                                                    <div className="ripple-cont"></div>
                                                </div>
                                                <h3 className="pt-5 pb-2">{item.name}</h3>
                                            </div>
                                        </div>
                                        </Fade>
                                    )
                                })}
                            </div>
                        </div>
                    
                    <a href="/tourist-spots"><p>More</p></a>
                </div>


                <div className="even-section padding">
                    <Fade top>
                        <div className="section-title">
                            <h1>Festivals</h1>
                        </div>
                    </Fade>
                    <div className="Timeline">
                        <Container>
                            {festivals.map((item, index) => {
                                const dir = index % 2 === 0 ? "timeline-item-left" : "timeline-item-right";
                                return(
                                    <Fade top>
                                        <div className={dir}>
                                            <div className="timeline-img">
                                                
                                            </div>
                                            <div className="timeline-content">
                                            <div className="date">{item.month}</div>
                                                {/* <img src={require('../img/jumboImg.jpg')} className="act-img" alt="..."/> */}
                                                <h3>{item.name}</h3>
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            })}
                        </Container>
                    </div>
                </div>

                <div className="odd-section padding">
                    <iframe className="main-map" title="map1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62369.06420978854!2d76.6204090727509!3d12.311307694910143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1607701603641!5m2!1sen!2sin" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>

                <div className="even-section padding">
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
