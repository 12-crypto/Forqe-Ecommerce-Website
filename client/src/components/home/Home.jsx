import { Box, makeStyles } from '@material-ui/core';

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from './Midsection';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#171717'
    },
    rightWrapper: {
        background:'#FFFFFF',
        padding: 5,
        margin: '8px 10px 10px 10px',
        width: '16%'


    }
})

const Home = () => {
    const classes = useStyle();
    const addURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';


    return (
        <div>
            <NavBar />
            <Box className = {classes.component}>
            <Banner />
            <Box  style = {{display:'flex'}}>
                <Box style ={{width: '83%'}}>
                    <Slide 
                        timer={true}
                        title="Deal of the Day"
                    />
                </Box>
                <Box className={classes.rightWrapper}>
                    <img src ={addURL} style={{width: 230}}/>
                </Box>
            </Box>
            <MidSection />
            <Slide timer={false} title="Discounts For You"/>
            <Slide timer={false} title="Suggested Items"/>
            <Slide timer={false} title="Top Selection"/>
            <Slide timer={false} title="Recommended Items"/>
            <Slide timer={false} title="Best Sellers"/>
            </Box>

        </div>


    )
}

export default Home;