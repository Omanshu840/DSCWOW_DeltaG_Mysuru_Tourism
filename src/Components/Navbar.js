import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default class CustomNavbar extends Component {
    render() {
        return (
            
            <Navbar className="main-navbar" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Mysuru Tourism</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Places to Visit</Nav.Link>
                        <Nav.Link href="#pricing">Things to Do</Nav.Link>
                        <NavDropdown title="Travel" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Air</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Train</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Road</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    <Nav>
                    <Nav.Link href="#deets">23&deg; C</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        +5:50 GMT
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}
