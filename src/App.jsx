import React, { Component } from "react";
import {Route} from "react-router-dom";
import Truck from './components/Truck'
import "./App.css";
import UserInfo from "./components/Registration/userInfo"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Landing from './components/Landing/index'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
        <Route exact path="/" component={Landing}/>
        <Route path="/Home" component={Home}/>
        <Route path="/register" component={UserInfo}/>
        <Route path="/truck" component={Truck}/>
        </div>
        <Footer />
      </div>
      )
    }
  }

export default App;
