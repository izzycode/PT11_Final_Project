import {
    GoogleMapProvider,
    HeatMap,
    InfoWindow,
    MapBox,
    Marker,
    Polygon,
  } from '@googlemap-react/core'
  
 import React, { Component } from 'react'
 
 export default class OtherMap extends Component {

    state={
        longitude:-80.191788,
        latitude:25.761681,
    }
    
    componentDidMount (){
        navigator.geolocation.getCurrentPosition( (position) => {
             this.setState({ latitude: position.coords.latitude,
            longitude: position.coords.longitude})
        })
    }


     render() {
         return (
           
                 <GoogleMapProvider>
                   <MapBox
                     apiKey="AIzaSyB1Yrsp1FADOqPpMLzu43cJoPtwRb3LBxw"
                     opts={{
                       center: {lat: this.state.latitude, lng: this.state.longitude},
                       zoom: 14,
                     }}
                     style={{
                       height: '80vh',
                       width: '80vw',
                     }}
                     useDrawing
                     useGeometry
                     usePlaces
                     useVisualization
                     onCenterChanged={() => {
                       console.log('The center of the map has changed.')
                     }}
                   />
                   <Marker
                     id="marker"
                     opts={{
                       draggable: true,
                       label: 'hello',
                       position: {lat: 39, lng: 116},
                     }}
                   />
                   <InfoWindow
                     opts={{
                       content: 'This is an info window',
                       position: {lat: 39.01, lng: 115.99},
                     }}
                     visible
                   />
                 </GoogleMapProvider>
                )
                 
            
     }
 }
 
