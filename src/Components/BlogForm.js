import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const BlogForm = () => {
    return (
        <div className="odd-section padding">
            <Container>
                <h1>Write a blog</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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