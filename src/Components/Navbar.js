import React, { Component } from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className="navbar-brand">
                            <img
                                src={require('../img/logo.png')}
                                width="80"
                                height="60"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/tourist-spots" className="nav-link">Tourist Spots</Link>
                                <Link to="/things-to-do" className="nav-link">Things to Do</Link>
                                <Link to="/hotels" className="nav-link">Hotels</Link>
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </Nav>
                            <Nav>
                                <Link to="/weather" className="nav-link">
                                    {this.state.temp}&deg; C
                                </Link>
                            </Nav>
                            {(this.props.isLoggedIn) ?  "user" : <Button className="btn-signIn" onClick={SignInUser}>Sign In</Button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
