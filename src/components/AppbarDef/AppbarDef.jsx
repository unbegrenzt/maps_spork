import AppBar from '@material-ui/core/AppBar';
import colors from '../../utils/colors';

const appBarStyle = {
    backgroundColor: colors.get('primaryColor'),
    color: colors.get('primaryTextColor')
};

const AppbarDef = (props) => {

    return (
        <AppBar style={appBarStyle} position="static" ref={props.refAppBar}>
            {props.children}
        </AppBar>
    );
}

export default AppbarDef;