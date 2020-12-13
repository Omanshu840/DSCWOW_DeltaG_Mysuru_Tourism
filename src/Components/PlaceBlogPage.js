import React, { Component} from 'react'
import { Container, Jumbotron, Card, Button} from 'react-bootstrap'
import tourist_spots from '../Constants/tourist_spots';
import { db } from '../firebase'
import BlogForm from './BlogForm'
import Fade from 'react-reveal/Fade';

class PlaceBlogPage extends Component {

    constructor() {
        super();
        this.state = {
            blogs: [],
        }
    }
    
    componentDidMount() {
        db.collection('blogs')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data);
                this.setState({ blogs: data });
            });
    }

    render () {

        return (
            <div className="blogpage">
                <Jumbotron className="blog-jumbotron text-center">
                    <div className="jumbo-text">
                        <h1 className="display-1">Mysuru Travel Blog</h1>
                    </div>
                </Jumbotron>
                <Container>

                        {this.state.blogs.map((item, index) => {
                            const blogLink = "/blog/" + index;
                            if(item.place === tourist_spots[this.props.match.params.place_id]['name']) {
                                return (
                                    <div className="padding">
                                        <Fade top>
                                            <Card>
                                                <Card.Header><h1>{item.blog_name}</h1></Card.Header>
                                                <Card.Body>
                                                    <blockquote className="blockquote mb-0">
                                                    <p>
                                                        {' '}
                                                        {item.content}
                                                    {' '}
                                                    </p>
                                                    <footer className="blockquote-footer">
                                                        <cite title="Source Title">{item.author_name}, {item.email}</cite>
                                                    </footer>
                                                    </blockquote>
                                                    <Button href={blogLink} variant="primary">Check Full Article</Button>
                                                </Card.Body>
                                            </Card>
                                        </Fade>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div></div>
                                )
                            }
                        })}
                </Container>
                <BlogForm/>
            </div>
        )
    }
}

export default PlaceBlogPage;