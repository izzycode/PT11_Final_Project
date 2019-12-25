import React from "react"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2" >
            <div className="col mb-4 shadow" >
                <Link to="/truck">
                    <div className="card border-0">
                    <img src="https://i0.wp.com/thegratefulplate.org/wp-content/uploads/2018/01/hunger.png" className="card-img-top" alt="hungry face" width="150" height="450" mode="fit"/>
                    <div className="card-body p-3 mb-5 bg-white rounded" style={{}}>
                        <h5 className="card-title" style={{color:'black', fontWeight:'bolder',fontSize:"30px",height:'70px'}}>ARE YOU HUNGRY?</h5>
                        <p className="card-text" style={{color:'#666666', fontWeight:'bold',fontSize:"20px"}}>Click here if you are hungry in order to see a map of all the food trucks near you!</p>
                    </div>
                    </div>
                </Link>
            </div>
            <div className="col mb-4 shadow">
                <Link to="/register">
                    <div className="card border-0">
                    <img src="https://i2.wp.com/centralarkansasnow.com/wp-content/uploads/FOODTRUCK-1.png?fit=626%2C560&w=640" className="card-img-top" alt="food truck" width="150" height="450" mode="fit"/>
                    <div className="card-body p-3 mb-5 bg-white rounded">
                        <h5 className="card-title" style={{color:'black', fontWeight:'bolder',fontSize:"30px",hover:"#9fffcb"}}>ARE YOU COOKING?</h5>
                        <p className="card-text" style={{color:'#666666', fontWeight:'bold',fontSize:"20px"}}>Click here if you are a food truck that wants to register its location on our map in order to reach hungry customers!</p>
                    </div>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Home;
