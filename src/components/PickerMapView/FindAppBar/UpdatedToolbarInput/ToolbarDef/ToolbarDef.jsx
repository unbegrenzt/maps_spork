import Toolbar from '@material-ui/core/Toolbar';

const ToolbarDef = (props) => {

    return (
        < Toolbar >
            {props.children}
        </ Toolbar>
    );
};

export default ToolbarDef;