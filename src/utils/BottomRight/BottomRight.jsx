import Box from '@material-ui/core/Box';


export default function BottomRight(props) {

    return (
        <Box
            p={2}
            position="absolute"
            bottom={10}
            right={10}
            zIndex="tooltip"
        >
            {props.children}
        </Box>
    );
}
