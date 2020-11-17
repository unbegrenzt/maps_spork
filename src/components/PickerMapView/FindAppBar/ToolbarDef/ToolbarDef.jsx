import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

//TODO:Crear un span dinámico

const ToolbarDef = (props) => {
    const classes = useStyles();

    return (
        < Toolbar >
            <Typography className={classes.title} variant="h6" noWrap>
                <span>{ props.textVisible ? 'Maps Spork' : '         &nbsp;' }</span>
            </Typography>
            {props.children}
        </ Toolbar>
    );
};

export default ToolbarDef;