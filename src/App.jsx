import React, { Component } from "react";
import {Route} from "react-router-dom";
import "./App.css";
import UserInfo from "./components/Registration/userInfo"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={UserInfo}/>
        {/* <Route path="/truck" component={Contact}/> */}
        <Footer />
      </div>
      )
    }
  }

export default App;
