import React from 'react';
import AppbarDef from '../../AppbarDef/AppbarDef';
import Toolbardef from './ToolbarDef/ToolbarDef.jsx';
import ToolbarInput from './ToolbarInput/ToolbarInput.jsx';

export default function FindAppBar(props) {

    return (
        <>
            <AppbarDef>
                <Toolbardef textVisible={true}>
                    <ToolbarInput value={props.value.lat} />
                </Toolbardef>
                <Toolbardef textVisible={true}>
                    <ToolbarInput value={props.value.lng} />
                </Toolbardef>
            </AppbarDef>
        </>
    );
}
