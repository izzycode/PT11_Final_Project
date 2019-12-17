import React from "react"
import { red, yellow } from "ansi-colors";

const userInfo = () => {
    return (
        <div className="container">
        <form>
            <div className="row">
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Truck Name"/>
                </div>
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Truck Description"/>
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
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Hours of Operation"/>
                </div>
                <div className="col form-group">
                    <input type="text" className="form-control" placeholder="Truck Hashtag"/>
                </div>
            </div>
            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile02"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Upload picture of truck</label>
                </div>
                <div className="input-group-append">
                    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                </div>
            </div>
            <button type="submit" className="btn btn-lg" style={{backgroundColor: 'yellow'}} class="shadow p-3 mb-5 rounded border-0">Submit</button>
        </form>
        </div>
    );
}

export default userInfo;