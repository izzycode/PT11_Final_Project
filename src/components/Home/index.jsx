import React from "react"
import Othermap from "./../OtherMap"


const Home = () => {
    return (
            <div class="row pt-3">
                <div class="col-4 hungry">
                   here will go a list of the trucks
                </div>

                <div class="col-8">
                    <Othermap />
                </div>
            </div>
    );
}

export default Home;
