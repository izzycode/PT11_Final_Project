import React, { Component } from "react";
import {Route} from "react-router-dom";
import Truck from './components/Truck'




class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Home}/>
        <Route path="/register" component={register}/> */}
    <Route path="/truck" component={Truck}/>
      </div>
      )
    }
  }

export default App;
