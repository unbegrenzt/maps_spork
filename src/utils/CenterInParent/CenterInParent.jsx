import Grid from '@material-ui/core/Grid';

const CenterInParent = (props) => {

    return (
        <Grid container justify="center">
            {props.children}
        </Grid>
    );
}


export default CenterInParent;
