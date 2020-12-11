import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import CustomNavbar from './Components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
