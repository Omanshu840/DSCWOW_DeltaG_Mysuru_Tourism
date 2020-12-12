import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

const API_Key = '69686c974eab1d57671477cd89aef9b2';

export default class Weather extends Component {

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
            <div className="padding">
                <Container>
                    <div className="section-title">
                        <h1>Weather Info</h1>
                        <div className="underline"></div>
                    </div>
                    <h3>Mysuru, Karnataka</h3>
                    <h4>{this.state.temp}&deg; C</h4>
                    <h4>{this.state.weather}</h4>
                    <p>Humidity: {this.state.humidity}%</p>
                    <p>Wind Speed: {this.state.wind_speed} km/h</p>
                </Container>
            </div>
        )
    }
}
