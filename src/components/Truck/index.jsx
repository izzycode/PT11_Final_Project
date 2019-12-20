import React, { Component } from 'react'
import OtherMap from '../OtherMap'
import "./index.css"
import Feed from '../Feed/feed'


export default class Truck extends Component {
    state = {
        name: "Pizza Zilla Miami",
        description: "Venezuelan",
        descriptionTwo: "American",
        phoneNumber: "786-930-9930",
        website: <a href={"http://pizzazilla.weebly.com/"}>PizzaZilla</a>,
        startTime: "6 PM",
        endTime: "3 AM",
        hashtag: "PizzaZilla",
        uploadedPic: <img src="https://pbs.twimg.com/profile_images/558387795119448065/4Ch-1u9a_400x400.png"/>
    }
    render() {
        return (
            <div>
                <OtherMap/>

                <div>
                    <h2 className="truck-name">
                        {this.state.name}
                    </h2>

                    <div className="truck-main-image">
                                {this.state.uploadedPic}
                        </div>
                        <div className="truck-parent">
                            <label className="truck-label">Type of<br></br> Food: </label>
                            <div className="truck-attributes">
                                {this.state.description}<img src="https://lipis.github.io/flag-icon-css/flags/4x3/ve.svg" width="30 " height="50" mode="fit"/>{"        "}
                                {this.state.descriptionTwo}<img src="https://cdn.webshopapp.com/shops/94414/files/54959460/the-united-states-flag-icon-free-download.jpg" width="30 " height="20" mode="fit"/>
                            </div>
                            <label className="truck-label">Phone <br></br>Number: </label>
                            <div className="truck-attributes">      {this.state.phoneNumber}
                            </div>
                            <label className="truck-label">URL: </label>
                            <div className="truck-attributes">      {this.state.website}
                            </div>
                            <label className="truck-label">Opens at:</label>
                            <div className="truck-attributes">
                                {this.state.startTime}
                            </div>
                            <label className="truck-label">Closes at: </label>
                            <div className="truck-attributes">
                                {this.state.endTime}
                            </div>
                            <label className="truck-label">Twitter<br></br> Handle: </label>
                            <div className="truck-attributes">
                                {this.state.hashtag}
                            </div>
                            
                        </div>
                </div>
                <Feed name={this.state.hashtag}/>
            </div>
        )
    }
}





// truck nam, truck description
// phone number, website
// Hours of Operation, Truk Hashtag
// Upload a picture,
