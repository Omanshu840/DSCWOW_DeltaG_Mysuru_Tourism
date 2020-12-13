import React from "react"
import { Container, Row } from "react-bootstrap";

class Footer extends React.Component {

    render() {
    return (
        <footer className="main-footer">
            <Container className="padding">
                <Row className="text-center">
                    <div className="col-md-4">
                        <h2 className="py-3">Links</h2>
                        <a href="/tourist-spots"><p>Tourist Spots</p></a>
                        <a href="/things-to-do"><p>Things to Do</p></a>
                        <a href="/hotels"><p>Hotels</p></a>
                        <a href="/blog"><p>Blog</p></a>
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