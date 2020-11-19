import React, { useEffect, useState } from 'react';
import AppbarDef from '../../AppbarDef/AppbarDef';
import UpdatedToolbarInput from './UpdatedToolbarInput/UpdatedToolbarInput.jsx'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SwapVertIcon from '@material-ui/icons/SwapVert';

export default function FindAppBar(props) {

    const [lat, setLat] = useState(props.startPos.lat);
    const [lng, setLng] = useState(props.startPos.lng);

    useEffect(() => {
        setLat(props.value.lat);
        setLng(props.value.lng);
    }, [props.value]);

    return (
        <>
            <AppbarDef refAppBar={props.refAppBar}>
                <UpdatedToolbarInput
                    value={lat}
                >
                    <SwapHorizIcon />
                </UpdatedToolbarInput>
                <UpdatedToolbarInput
                    value={lng}
                >
                    <SwapVertIcon />
                </UpdatedToolbarInput>
            </AppbarDef>
        </>
    );
}
