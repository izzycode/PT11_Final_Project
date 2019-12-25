import React, { Component } from 'react'

export default class Landing extends Component {


    componentDidMount(){
        setTimeout(()=>{
            this.props.history.push('/Home')
        },3000)
    }


    render() {
        return (
        
        <div class="card bg-dark text-white" style={{height:"80%"}}>
            <img class="card-img" src="https://images.pexels.com/photos/1053769/pexels-photo-1053769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image"></img>
            <div class="card-img-overlay">
            <h5 class="card-title" style={{color:"black",fontSize:"90px",marginLeft:"29%",marginTop:"10%",fontFamily:"Comic Sans MS, cursive, sans-serif",color:"black",textShadow:"black",fontWeight:"bolder"}}>Where is The Food Truck!?</h5>
            </div>
        </div>

        )
    }
    }
    

