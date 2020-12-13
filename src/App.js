import React, {useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogHomePage from './Components/BlogHomePage';
import BlogPage from './Components/BlogPage';
import Chatbot from './Components/Chatbot';
import CovidAlert from './Components/CovidAlert';
import Festivals from './Components/Festivals';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import CustomNavbar from './Components/Navbar';
import PlaceBlogPage from './Components/PlaceBlogPage';
import ThingsToDo from './Components/ThingsToDo';
import TouristSpot from './Components/TouristSpot';
import TouristSpots from './Components/TouristSpots';
import Weather from './Components/Weather';

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const SignIn = () => {
      setLoggedIn(!isLoggedIn)
    }

    return (
      <div className="light-mode">
        <CustomNavbar isLoggedIn={isLoggedIn} SignIn={SignIn}/>
        <CovidAlert/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/tourist-spots" component={TouristSpots}/>
            <Route exact path="/things-to-do" component={ThingsToDo}/>
            <Route exact path="/festivals" component={Festivals}/>
            <Route path="/tourist-spot/:tourist_spot_id" component={TouristSpot}/>
            <Route exact path="/blog" component={BlogHomePage} />
            <Route path="/place-blog/:place_id" component={PlaceBlogPage} />
            <Route path="/blog/:blog_id" component={BlogPage} />
            <Route exact path="/weather" component={Weather} />
          </Switch>
        </BrowserRouter>
        <Chatbot/>
        <Footer/>
      </div>
    )
}

export default App;
