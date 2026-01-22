import {
  GoogleMapProvider,
  MapBox,
  Marker,
} from "@googlemap-react/core"
import React, { Component } from "react"

export default class OtherMap extends Component {
  state = {
    longitude: -80.191788,
    latitude: 25.761681,
    zoom: 14,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.selectedTruck &&
      prevProps.selectedTruck !== this.props.selectedTruck
    ) {
      this.setState({
        latitude: this.props.selectedTruck.lat,
        longitude: this.props.selectedTruck.lng,
        zoom: 16,
      })
    }
  }

  render() {
    const { trucks, onSelectTruck } = this.props

    return (
      <GoogleMapProvider>
        <MapBox
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
          opts={{
            center: { lat: this.state.latitude, lng: this.state.longitude },
            zoom: this.state.zoom,
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
        />

        <Marker
          opts={{
            position: {
              lat: this.state.latitude,
              lng: this.state.longitude,
            },
          }}
        />

        {trucks.map(t => (
          <Marker
            key={t.id}
            onClick={() => {
              if (onSelectTruck) onSelectTruck(t)
            }}
            opts={{
              position: { lat: t.lat, lng: t.lng },
            }}
          />
        ))}
      </GoogleMapProvider>
    )
  }
}
