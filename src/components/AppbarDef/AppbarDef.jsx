import AppBar from '@material-ui/core/AppBar';

const AppbarDef = (props) => {

    return (
        <AppBar position="static" ref={props.refAppBar}>
            {props.children}
        </AppBar>
    );
}

export default AppbarDef;