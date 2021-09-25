import React, { Component } from 'react'
import truckLogo from "./../../asset/foodtrucklogo.png"

export default class Landing extends Component {


    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.props.history.push('/Home')
    //     },10000)
    // }


    render() {
        return (
        
        <div class="card bg-dark text-white">
            <img class="card-img" src={truckLogo} alt="Card image"></img>
        </div>
        

        )
    }
    }