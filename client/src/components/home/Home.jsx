import { Box, makeStyles } from '@material-ui/core';

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from './Midsection';

// import { products } from '../../constants/data';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getProducts  as listProducts } from '../../redux/actions/productActions.js'


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

    const {products} = useSelector(state => state.getProducts)

    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])
    
   
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
                        products={products}
                    />
                </Box>
                <Box className={classes.rightWrapper}>
                    <img src ={addURL} style={{width: 230}}/>
                </Box>
            </Box>
            <MidSection />
            <Slide timer={false} title="Discounts For You" products={products} />
            <Slide timer={false} title="Suggested Items"products={products} />
            <Slide timer={false} title="Top Selection" products={products} />
            <Slide timer={false} title="Recommended Items" products={products} />
            <Slide timer={false} title="Best Sellers" products={products} />
            </Box>

        </div>


    )
}

export default Home;