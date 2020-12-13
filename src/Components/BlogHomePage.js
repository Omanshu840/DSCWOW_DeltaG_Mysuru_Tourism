import React, { Component} from 'react'
import { Container, Jumbotron} from 'react-bootstrap'
import tourist_spots from '../Constants/tourist_spots';
import { db } from '../firebase'
import BlogForm from './BlogForm'
import Fade from 'react-reveal/Fade';

class BlogHomePage extends Component {

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
                
                    <div className="row">
                        {tourist_spots.map((item, index) => {

                            const link = "place-blog/" + index;

                            return (
                                <Fade top>
                                    <div className="col-md-4">
                                        <a href={link}>
                                        <div className="card card-blog">
                                            <div className="card-image">
                                                <a href="/"> <img className="img img-raised" src={item.img_Link}  alt="..." /> </a>
                                                <div className="ripple-cont"></div>
                                            </div>
                                            <h5 className="pt-5 pb-2">{item.name} Blogs</h5>
                                        </div>
                                        </a>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                </Container>
                <BlogForm/>
            </div>
        )
    }
}

export default BlogHomePage;
