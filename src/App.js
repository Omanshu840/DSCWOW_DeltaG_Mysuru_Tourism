import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Festivals from './Components/Festivals';
import Homepage from './Components/Homepage';
import CustomNavbar from './Components/Navbar';
import ThingsToDo from './Components/ThingsToDo';
import TouristSpot from './Components/TouristSpot';
import TouristSpots from './Components/TouristSpots';

export default class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/tourist-spots" component={TouristSpots}/>
            <Route exact path="/things-to-do" component={ThingsToDo}/>
            <Route exact path="/festivals" component={Festivals}/>
            <Route path="/tourist-spot/:tourist_spot_id" component={TouristSpot}/>
            <Route path="/things-to-do/:ttd_id" component={TouristSpot}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
