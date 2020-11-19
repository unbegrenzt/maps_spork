import React, { useRef, useState, useMemo, useLayoutEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import FindAppBar from './FindAppBar/FindAppBar.jsx';
import L from 'leaflet';
import PickMarker from './PickMarker/PickMarker.jsx';

const position = [37.335556, -122.009167];

const checkIsMobile = () => (window.innerWidth < 960 ? true : false);

const PickerMapView = () => {
    const pickMarkerRef = useRef(null),
        nav = useRef();
    const startPos = new L.LatLng(position[0], position[1]);
    const [pickedPos, setPickedPos] = useState(startPos),
        [navHeight, setNavHeight] = useState(0),
        [isMobile, setMobile] = useState(false);

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

    useLayoutEffect(() => {
        nav.current && setNavHeight(nav.current.clientHeight);
    }, [isMobile]);

    if (typeof window !== 'undefined') {
        window.onresize = () => isMobile !== checkIsMobile && setMobile(checkIsMobile);
    }

    return (
        <>
            <FindAppBar startPos={startPos} value={pickedPos} refAppBar={nav} />
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: `${window.innerHeight - navHeight}px` }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PickMarker startPos={startPos}
                    eventHandlers={eventHandlers}
                    markerRef={pickMarkerRef} />
            </MapContainer >
        </>
    );
}

export default PickerMapView;