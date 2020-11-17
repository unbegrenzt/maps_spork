import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    }
}));

const AppbarDef = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                {props.children}
            </AppBar>
        </div>
    );
}

export default AppbarDef;