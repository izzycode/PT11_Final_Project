import React from "react"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container" style={{paddingTop: '35px'}}>
            <div className="row row-cols-1 row-cols-md-2" >
            <div className="col mb-4" >
                <Link to="/truck">
                    <div className="card border-0">
                    <img src="https://i0.wp.com/thegratefulplate.org/wp-content/uploads/2018/01/hunger.png" className="card-img-top" alt="hungry face" width="150" height="450" mode="fit"/>
                    <div className="card-body shadow p-3 mb-5 bg-white rounded">
                        <h5 className="card-title" style={{color:'black', fontWeight:'bolder'}}>ARE YOU HUNGRY?</h5>
                        <p className="card-text" style={{color:'black', fontWeight:'bold'}}>Click here if you are hungry in order to see a map of all the food trucks near you!</p>
                    </div>
                    </div>
                </Link>
            </div>
            <div className="col mb-4">
                <Link to="/register">
                    <div className="card border-0">
                    <img src="https://i2.wp.com/centralarkansasnow.com/wp-content/uploads/FOODTRUCK-1.png?fit=626%2C560&w=640" className="card-img-top" alt="food truck" width="150" height="450" mode="fit"/>
                    <div className="card-body shadow p-3 mb-5 bg-white rounded">
                        <h5 className="card-title" style={{color:'black', fontWeight:'bolder'}}>ARE YOU COOKING?</h5>
                        <p className="card-text" style={{color:'black', fontWeight:'bold'}}>Click here if you are a food truck that wants to register its location on our map in order to reach hungry customers!</p>
                    </div>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Home;
