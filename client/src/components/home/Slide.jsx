import { makeStyles} from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { products } from '../../constants/data';
//import Countdown from 'react-countdown';
//import { Link } from 'react-router-dom';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles ({
    
    image: {
        
        height: 90
    }
    
    
})



const Slide = () => {
    const classes = useStyle();
    return (
        <Carousel
            responsive={responsive}
        >
            {
                products.map(product =>(
                    <img src ={product.url} className={classes.image} />
                ))
            }
            
        </Carousel>
    )
}

export default Slide;