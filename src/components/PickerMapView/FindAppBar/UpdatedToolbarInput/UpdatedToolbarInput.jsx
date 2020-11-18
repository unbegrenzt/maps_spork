import React from 'react';
import Toolbardef from './ToolbarDef/ToolbarDef.jsx';
import ToolbarInput from './ToolbarInput/ToolbarInput.jsx';
import CenterInParent from '../../../../utils/CenterInParent/CenterInParent.jsx';

export default function UpdatedToolbarInput(props) {


    return (
        <Toolbardef>
            <CenterInParent>
                <ToolbarInput value={props.value} onchange={props.onchange}>
                    {props.children}
                </ToolbarInput>
            </CenterInParent>
        </Toolbardef>
    );
}