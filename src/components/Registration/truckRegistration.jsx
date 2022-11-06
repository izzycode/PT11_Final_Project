import React, { useState } from "react"
import { red, yellow } from "ansi-colors";
// import {Dropdown} from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"

const truckRegistration = () => {


    const clickHandler = (event) => {
        let openingTime = document.getElementById('open-time')
        openingTime.value = event.target.innerText

    }

    const closeHandler = (event) => {
        let closingTime = document.getElementById('close-time')
        closingTime.value = event.target.innerText

    }


    return (
        <form>
            <div className="row">
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Truck Name" name="truck_name"/>
                </div>
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Instagram Handle" name="instagram" />
                </div>
            </div>
            <div className="row">
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Phone Number" name="phone"/>
                </div>
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Website" name="site"/>
                </div>
            </div>
                <div className="row mb-3">
                <div className="col-3">
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
                    </div>
                    <div className="col-3">
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
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Cuisine Description"/>
                        </div>
                    </div>
                </div>

            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile02" name="truck_photo"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Upload picture of food truck</label>
                </div>
                <div className="input-group-append">
                    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default truckRegistration;