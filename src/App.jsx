import React, { Component } from "react"
import { Route } from "react-router-dom"
import Truck from "./components/Truck"
import MapPage from "./components/Home"
import TruckRegistration from "./components/Registration/truckRegistration"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={() => <MapPage />}
        />

        <Route
          path={["/register", "/truck"]}
          render={() => (
            <>
              <NavBar />
              <div className="container">
                <Route path="/register" component={TruckRegistration} />
                <Route path="/truck" component={Truck} />
              </div>
              <Footer />
            </>
          )}
        />
      </>
    )
  }
}

export default App
