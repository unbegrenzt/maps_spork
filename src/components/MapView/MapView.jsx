import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const position = [37.335556, -122.009167];

const ContainerMap = styled.div`
  width: 100%;
  height: 100vh;
`;

class MapView extends React.Component {
    render() {
        return (
            <ContainerMap>
                <MapContainer center={position} zoom={13}
                    style={{
                        height: "100%"
                    }}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            <span>A pretty CSS3 popup.<br />Easily customizable.</span>
                        </Popup>
                    </Marker>
                </MapContainer >
            </ContainerMap>
        );
    }
}

export default MapView;