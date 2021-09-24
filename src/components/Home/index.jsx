import React from "react"
import { Link } from "react-router-dom";
import foodtrucklogo from "./../../asset/foodtrucklogo.png"
import hungrylogo from "./../../asset/Hungrylogo.png"


const Home = () => {
    return (
        <div class="container-fluid">
            <div class="row pt-3">
                <div class="col-md-6 hungry">
                    <Link to="/truck">
                        <div className="card h-100">
                            <img src={hungrylogo} className="card-img-top" alt="hungry face" />
                        <div className="card-body bg-white rounded" >
                            <h5 className="card-title">ARE YOU HUNGRY?</h5>
                            <p className="card-text">Click here if you are hungry in order to see a map of all the food trucks near you!</p>
                        </div>
                        </div>
                    </Link>
                </div>

                <div class="col-md-6">
                    <Link to="/register">
                        <div className="card h-100 truck">
                            <img src={foodtrucklogo} className="card-img-top" alt="food truck"/>
                        <div className="card-body bg-white rounded">
                            <h5 className="card-title" >ARE YOU COOKING?</h5>
                            <p className="card-text" >Click here if you are a food truck that wants to register its location on our map in order to reach hungry customers!</p>
                        </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
