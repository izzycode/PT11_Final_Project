import React, { Component } from "react";
import {Route} from "react-router-dom";
import Truck from './components/Truck'
import "./App.css";
import truckRegistration from "./components/Registration/truckRegistration"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={truckRegistration}/>
        <Route path="/truck" component={Truck}/>
        </div>
        <Footer />
      </div>
      )
    }
  }

export default App;
