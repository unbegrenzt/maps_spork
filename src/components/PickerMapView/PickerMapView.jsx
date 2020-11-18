import React, { useRef, useState, useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import FindAppBar from './FindAppBar/FindAppBar.jsx';
import L from 'leaflet';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import PickMarker from './PickMarker/PickMarker.jsx';

const position = [37.335556, -122.009167];

const MapContainerStyle = {
    width: '100%',
    height: '80vh'
};

const PickerMapView = () => {

    const pickMarkerRef = useRef(null);
    const startPos = new L.LatLng(position[0], position[1]);
    const [pickedPos, setPickedPos] = useState(startPos);

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
            <FindAppBar startPos={startPos} value={pickedPos} />
            <MapContainer
                center={position}
                zoom={13}
                style={MapContainerStyle}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PickMarker startPos={startPos}
                    eventHandlers={eventHandlers}
                    markerRef={pickMarkerRef} />
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </MapContainer >
        </>
    );
}

export default PickerMapView;