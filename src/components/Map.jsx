import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ReactMapGL from 'react-map-gl';
import {marker} from 'leaflet'



export default class Map extends Component {


    state = {
        viewport: {
            width: 900,
            height: 400,
            zoom: 7,
            latitude: 25.7617,
            longitude: 80.1918,
            marker: []
        }
      };


    componentDidMount(){
        navigator.geolocation.getCurrentPosition((maps)=>{
            // console.log(maps);
            this.setState({viewport: {
                latitude: maps.coords.latitude,
                longitude: maps.coords.longitude,
                width: 900,
                height: 400,
                zoom: 7,  
                marker: [latitude,longitude]
            }})
        })
    }


    render() {

        return (
            <Container>
                <Card bg="dark" text="light" >
                    <ReactMapGL mapboxApiAccessToken={'pk.eyJ1IjoibmxwYXJyYS1kZXYiLCJhIjoiY2s0MGt1d3NzMDJ0aTNlcXQ2a2w2NmVraCJ9.a6oDqk6CYrUEoZN1DIlYlg'}
                    {...this.state.viewport}
                    />
                    <Card.Body>
                        <Card.Text>
                            WTFT!?!?!? Where is my food truck yo!!!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
