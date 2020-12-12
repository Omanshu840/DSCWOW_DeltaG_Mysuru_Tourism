import { useParams } from 'react-router-dom';
import React, { Component } from 'react'
import { db } from '../firebase';
import { Jumbotron } from 'react-bootstrap';

export default class BlogPage extends Component {

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
        console.log(this.state.blogs);
    }

    render() {
        return (
            <div>
                {
                    this.state.blogs.reverse().map((item, index) => {
                        console.log(this.props.match.params.blog_id)
                    if(index === (this.props.match.params.blog_id-1+1)) {
                        return (
                            <div>
                                <Jumbotron className="blog-jumbotronpage text-center">
                                    <div className="jumbo-text">
                                        <h1 className="display-1">{item.blog_name}</h1>
                                    </div>
                                </Jumbotron>
                                <div className="even-section padding"> 
                                    {item.content}
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                        <div>
                        </div>
                        )
                    }
                })}
            </div>
        )
    }
}
