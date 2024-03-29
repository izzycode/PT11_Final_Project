import {
    GoogleMapProvider,
    InfoWindow,
    MapBox,
    Marker,
  } from '@googlemap-react/core'
 import React, { Component } from 'react'
 import trucks from '../data/trucks'

 
 export default class OtherMap extends Component {

    state={
        longitude:-80.191788,
        latitude:25.761681,
        show: 'none',
        trucks: trucks,
        truckIndx: 0
    }
    
    
    componentDidMount (){
        navigator.geolocation.getCurrentPosition( (position) => {
             this.setState({ latitude: position.coords.latitude,
            longitude: position.coords.longitude})
        })
    }

     render() {
         let truck = this.state.trucks[this.state.truckIndx]
         
         return (
             <React.Fragment>

            <div className="map-modal bg-dark text-light border border-success" style={{
                width: '60%',
                height: '70%',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                zIndex: '100',
                position: 'fixed',
                top: '14vh',
                left: '22%',
                display: this.state.show
                
            }}>

                
                <button onClick={ e => {
                    this.setState({show: 'none'})
                }} className="btn btn-outline-danger btn-sm float-right ">X</button>
                <h1>Foodtruck: {truck.name}</h1>
                <p>Description: {truck.description} </p>
                <p>Time of Operation: {truck.Hours}</p>
                <p>Website: {truck.website}</p>
                <p>Twitter: {truck.hashtag}</p>
                Check us out on:
                <a href={truck.Website}>{truck.name}</a>

            </div>
                 <GoogleMapProvider>
                    <div className="modal" style={{
                        width: '300px',
                        height: '300px',
                        backgroundColor: 'red',

                    }}>

                    </div>

                   <MapBox
                     apiKey="AIzaSyB1Yrsp1FADOqPpMLzu43cJoPtwRb3LBxw"
                     opts={{
                         center: {lat: this.state.latitude, lng: this.state.longitude},
                         zoom: 14,
                        }}
                        style={{
                            height: '60vh',
                            width: '60vw',
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
                         label: 'Here you are Fat ass!',
                         position: {lat: this.state.latitude, lng: this.state.longitude},
                        }}
                        />
                    
                    {
                        this.state.trucks.map( (t, index) => {
                            return (
                        
                                <Marker
                                key={index}
                                 onClick={ () => {
                                    this.setState({show:'block', truckIndx: index })
                                 }}
                                 id={t.id}
                                 opts={{
                                     draggable: true,
                                     position: {lat: t.lat, lng: t.lng },
                                 }}
                                 />
                            )
                        })
                    }
                  
                   <InfoWindow
                     opts={{
                       content: 'This is an info window',
                       position: {lat: 39.01, lng: 115.99},
                     }}
                     visible
                   />
                 </GoogleMapProvider>
            </React.Fragment>

                )
                 
            
     }
 }
 

