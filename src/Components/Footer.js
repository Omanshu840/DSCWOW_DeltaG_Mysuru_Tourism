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
                        <a href="/about"><p>Place</p></a>
                        <a href="/projects"><p>Projects</p></a>
                        <a href="/organizations"><p>Orgranizations</p></a>
                    </div>
                    <div className="col-md-4">
                        <h2 className="py-3">Social Handles</h2>
                        <p>Social Media Link</p>
                    </div>
                    <div className="col-md-4">
                        <h2 className="py-3">Emergency Contacts</h2>
                        <p>Email: examplemail@xyx.com</p>
                        <p>Telegram: example@NITK</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )}
}

export default Footer;