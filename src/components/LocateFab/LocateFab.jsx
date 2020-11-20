import React from 'react';
import { useMapEvents } from 'react-leaflet';
import Fab from '@material-ui/core/Fab';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import BottomRight from '../../utils/BottomRight/BottomRight.jsx';
import colors from '../../utils/colors';

const fabStyle = {
    backgroundColor: colors.get('secondaryColor'),
    color: colors.get('secondaryTextColor')
};

const LocateFab = () => {

    const map = useMapEvents({
        locationfound(e) {
            map.flyTo(e.latlng, map.getZoom())
        },
    });

    const getLocation = () => {
        map.locate();
    };

    return (
        <BottomRight>
            <Fab
                style={fabStyle}
                aria-label="find"
                onClick={getLocation}
            >
                <MyLocationIcon />
            </Fab>
        </BottomRight>
    );
}

export default LocateFab;