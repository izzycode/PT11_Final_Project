import React, { useRef, useEffect} from 'react'


const loc = {lat: -25.344, lng: 80}


const Map = props => {
    const mapRef = useRef()

    

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current,{
            position: loc,
            zoom: 6
        })

        new window.google.maps.Marker({
            position: loc,
            map
        })
    }, [loc, 6]) 



        
    return (
        <div
            ref={mapRef}
            className={`map`}
            style={{height: "600px", width: "1000px", display:"block"}}
        >
        </div>
    )
}
 
export default Map