import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {db} from '../firebase';

const BlogForm = () => {

    const [blog_name, setBlogName] = useState("");
    const [author_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("blogs").add({
            blog_name: blog_name,
            author_name: author_name,
            email: email,
            content: content,
        })
        .then(() => {
            alert("Blog Registered");
        })
        .catch((error) => {
            alert(error.message);
        })

        setBlogName("");
        setName("");
        setEmail("");
        setContent("");
    }

    return (
        <div className="blogform odd-section padding">
            <Container>
                <div className="section-title">
                    <h1>Write a Blog</h1>
                    <div className="underline"></div>
                </div>  
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Blog Heading</Form.Label>
                        <Form.Control type="name" placeholder="Enter Blog Heading" value={blog_name} onChange={(e) => setBlogName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Your Name" value={author_name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default BlogForm;