import React, { useState } from "react"
import { red, yellow } from "ansi-colors";
// import {Dropdown} from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"

const userInfo = () => {


    const clickHandler = (event) => {
        let openingTime = document.getElementById('open-time')
        openingTime.value = event.target.innerText
        
    }
    
    const closeHandler = (event) => {
        let closingTime = document.getElementById('close-time')
        closingTime.value = event.target.innerText

    }


    return (
        <div className="container mt-5 mb-5">
        <form>
            <div className="row">
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Truck Name"/>
                </div>
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Instagram Handle"/>
                </div>
            </div>
            <div className="row">
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Phone Number"/>
                </div>
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Website"/>
                </div>
            </div>
            <div className="row">
                <Dropdown style={{paddingLeft: '15px'}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Opening Time
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">12:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">1:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-1">2:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">3:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">4:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-1">5:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">6:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">7:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-1">8:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">9:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">10:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-1">11:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">12:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">1:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-1">2:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">3:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">4:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-1">5:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">6:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">7:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-1">8:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-2">9:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">10:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={clickHandler} href="#/action-3">11:00 PM</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="col form-group">
                    <input id="open-time" type="text" className="form-control" placeholder="Opening Time"/>
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Closing Time
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">12:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">1:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-1">2:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">3:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">4:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-1">5:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">6:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">7:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-1">8:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">9:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">10:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-1">11:00 AM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">12:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">1:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-1">2:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">3:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">4:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-1">5:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">6:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">7:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-1">8:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-2">9:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">10:00 PM</Dropdown.Item>
                        <Dropdown.Item onClick={closeHandler} href="#/action-3">11:00 PM</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="col form-group">
                    <input id="close-time" type="text" className="form-control" placeholder="Closing Time"/>
                </div>
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Cuisine Description"/>
            </div>

            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile02"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Upload picture of food truck</label>
                </div>
                <div className="input-group-append">
                    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                </div>
            </div>
            <button type="submit" className="btn " style={{backgroundColor: 'rgb(159, 255, 203)', fontWeight: 'bold'}} >Submit</button>
        </form>
        </div>
    );
}

export default userInfo;