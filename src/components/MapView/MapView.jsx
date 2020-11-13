import React, { useRef, useState, useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

import PickMarker from '../PickMarker/PickMarker.jsx';

const position = [37.335556, -122.009167];

const ContainerMap = styled.div`
  width: 100%;
  height: 80vh;
`;

const MapView = () => {

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
            <ContainerMap>
                <MapContainer center={position} zoom={13}
                    style={{
                        height: "100%"
                    }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <PickMarker startPos={position}
                        eventHandlers={eventHandlers}
                        markerRef={pickMarkerRef} />
                </MapContainer >
            </ContainerMap>
            <h2 color="black" height="20vh">{`${pickedPos}`}</h2>
        </>
    );
}

export default MapView;