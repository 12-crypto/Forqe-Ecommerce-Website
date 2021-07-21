import { Box, makeStyles } from '@material-ui/core';

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    return (
        <div>
            <NavBar />
            <Box className = {classes.component}>
            <Banner />
            <Slide />
            </Box>

        </div>


    )
}

export default Home;