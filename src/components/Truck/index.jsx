import React, { Component } from 'react'
import OtherMap from '../OtherMap'
import "./index.css"


export default class Truck extends Component {
    state = {
        name: "Zona Grill Venezuelan Food",
        description: "Venezuelan",
        phoneNumber: "786-930-9930",
        website: "https://www.zonagrill.com",
        startTime: "1800",
        endTime: "2400",
        hashtag: "ZonaGrill",
        uploadedPic: "TruckImageLink"
    }
    render() {
        return (
            <div>
                <OtherMap/>

                <div>
                    <h2 className="truck-name">
                        {this.state.name}
                    </h2>


                        <div className="truck-parent">
                            <div className="truck-attributes"> 
                                <label>Description</label>
                                {this.state.description}
                            </div>
                            <div className="truck-attributes">      {this.state.phoneNumber}
                            </div>
                            <div className="truck-attributes">      {this.state.website}
                            </div>
                            <div className="truck-attributes">
                                {this.state.startTime}
                            </div>
                            <div className="truck-attributes">
                                {this.state.endTime}
                            </div>
                            <div className="truck-attributes">
                                {this.state.hashtag}
                            </div>
                            <div className="truck-attributes">
                                {this.state.uploadedPic}
                        </div>
                        </div>
                </div>
                {/* <TwitterFeed/> */}
            </div>
        )
    }
}





// truck nam, truck description
// phone number, website
// Hours of Operation, Truk Hashtag
// Upload a picture,
