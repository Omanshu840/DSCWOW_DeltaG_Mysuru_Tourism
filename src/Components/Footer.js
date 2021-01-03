import React from "react"
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    render() {
    return (
        <footer className="main-footer">
            <Container className="padding">
                <Row className="text-center">
                    <div className="col-md-4">
                        <h2 className="py-3">Links</h2>
                        <Link to="/tourist-spots" className="nav-link">Tourist Spots</Link>
                        <Link to="/things-to-do" className="nav-link">Things to Do</Link>
                        <Link to="/hotels" className="nav-link">Hotels</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </div>
                    <div className="col-md-4">
                        <h2 className="py-3">Social Handles</h2>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Telegram</p>
                    </div>
                    <div className="col-md-4">
                        <h2 className="py-3">Emergency Contacts</h2>
                        <p>Police: xxxxxx</p>
                        <p>Fireman: xxxxxx</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )}
}

export default Footer;