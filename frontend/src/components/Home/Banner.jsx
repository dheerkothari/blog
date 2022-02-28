import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image: {
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 60,
            color: '#F94218',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 30,
            color: '#FC461C'
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Webclues</Typography>
        </Box>
    )
}

export default Banner;