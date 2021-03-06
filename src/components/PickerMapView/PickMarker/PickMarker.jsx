import React, { useState } from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const PickMarker = (props) => {
    const [position, setPosition] = useState(props.startPos);
    let data;

    const map = useMapEvents({
        move() {
            data = map.getCenter();
            setPosition(new L.LatLng(data.lat, data.lng));
        },
    });

    return (
        <Marker position={position} eventHandlers={props.eventHandlers}
            ref={props.markerRef}>
            <Popup>You select this position</Popup>
        </Marker>
    );
}

export default PickMarker;