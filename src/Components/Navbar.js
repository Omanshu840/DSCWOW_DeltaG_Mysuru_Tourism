import React, { Component } from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import firebase from 'firebase';

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
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mysuru&units=metric&appid=${API_Key}`);
        const response = await api_call.json();
        this.setState({
            weather: response['weather'][0]['description'],
            temp: response['main']['temp'],
            humidity: response['main']['humidity'],
            wind_speed: response['wind']['speed'],
        })
    }
    
    render() {

        function SignInUser() {
            var provider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(provider).then(function(result) {
              }).catch(function(error) {
                // Handle Errors here.
                console.log(error);
                // ...
              });
        }

        return (
            <div>
                <Navbar className="main-navbar" collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><img
                            src={require('../img/logo.png')}
                            width="80"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/tourist-spots">Places</Nav.Link>
                                <Nav.Link href="/tourist-spots">Festivals</Nav.Link>
                                <Nav.Link href="/things-to-do">Things to Do</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                                {/* <NavDropdown title="Travel" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Air</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Train</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Road</NavDropdown.Item>
                                </NavDropdown> */}
                                </Nav>
                            <Nav>
                                <Nav.Link href="/weather">
                                    {this.state.temp}&deg; C
                                </Nav.Link>
                            </Nav>
                            {(this.props.isLoggedIn) ?  "user" : <Button className="btn-signIn" onClick={SignInUser}>Sign In</Button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
