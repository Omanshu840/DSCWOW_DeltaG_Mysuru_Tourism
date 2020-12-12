import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap';

const API_Key = '69686c974eab1d57671477cd89aef9b2';

export default class CustomNavbar extends Component {

    constructor() {
        super();
        this.state = {
            weather: "",
            temp: "",
            humidity: "",
            wind_speed: "",

        };
        this.getWeather();
    }

    getWeather = async() => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Mysuru&units=metric&appid=${API_Key}`);
        const response = await api_call.json();
        this.setState({
            weather: response['weather'][0]['description'],
            temp: response['main']['temp'],
            humidity: response['main']['humidity'],
            wind_speed: response['wind']['speed'],
        })
    }

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
                        <Nav.Link href="#deets">
                            {this.state.temp}&deg; C
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            +5:30 GMT
                        </Nav.Link>
                        <Nav.Link href="/weather">
                            Get More Weather Info
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}
