import React, { Component } from 'react';
import Hero from './Hero';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <div className="even-section padding">
                    <h2>Tourist Spots</h2>
                    <a href="/tourist-spots"><p>More</p></a>
                </div>
                <div className="odd-section padding">
                    <h2>Things to Do</h2>
                    <a href="/things-to-do"><p>More</p></a>
                </div>
                <div className="even-section padding">
                    <h2>Major Festivals</h2>
                    <a href="/festivals"><p>More</p></a>
                </div>
            </div>
        )
    }
}
