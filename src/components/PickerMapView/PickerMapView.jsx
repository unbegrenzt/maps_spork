import React, { useRef, useState, useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import FindAppBar from './FindAppBar/FindAppBar.jsx';

import PickMarker from './PickMarker/PickMarker.jsx';

const position = [37.335556, -122.009167];

const MapContainerStyle = {
    width: '100%',
    height: '80vh'
};

const PickerMapView = () => {

    const pickMarkerRef = useRef(null);
    const [pickedPos, setPickedPos] = useState(position);

    const eventHandlers = useMemo(
        () => ({
            move() {
                const marker = pickMarkerRef.current
                if (marker != null) {
                    setPickedPos(marker.getLatLng())
                }
            },
        }),
        [],
    )

    return (
        <>
            <FindAppBar value={pickedPos} />
            <MapContainer center={position} zoom={13}
                style={MapContainerStyle}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PickMarker startPos={position}
                    eventHandlers={eventHandlers}
                    markerRef={pickMarkerRef} />
            </MapContainer >
        </>
    );
}

export default PickerMapView;