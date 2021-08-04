import { Box,makeStyles, TableBody, Typography,TableCell,Table, TableRow } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
//import products from "../../../../server/model/productSchema.js";
import { getProductDetails } from "../../redux/actions/productActions.js";
import clsx from 'clsx';
import {LocalOffer } from '@material-ui/icons';
// Component
import ActionItems from "./ActionItems.jsx";

const useStyle = makeStyles(theme=>({
    component:{
        marginTop: 55,
        background: '#666769'
    },
    container: {
        background: '#FFFFFF',
        margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
     rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }    
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize:14,
            marginTop:14
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    },
    badged:{
        fontSize:14,
        marginRight:10,
        color:'#00cc00'
    }
}));



const DetailView= ({ match }) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
;


    const {product} = useSelector(state => state.getProductDetails);
    
    const date = new Date(new Date().getTime() + (5*24*60*60*1000));

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch,match])

    return (
        <Box className={classes.component}>
            { product && Object.keys(product).length &&
            <Box className={classes.container}>
                <Box style={{minWidth:'40%'}}>
                    <ActionItems product={product}/>
                </Box>
                <Box className = {classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                            8 Ratings & 2 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                        </Typography>
                
                <Typography style={{marginTop: 20, fontWeight: 600}}>Available Offers</Typography>
                <Box className={classes.smallText}>
                    <Typography><LocalOffer className={classes.badged}/>Bank Offer Get additional ₹1000 off on HDFC Debit/Credit card EMI transactions T&C</Typography>
                    <Typography><LocalOffer className={classes.badged}/>Bank Offer Get additional ₹750 off on select HDFC Credit Card Transaction T&C</Typography>
                    <Typography><LocalOffer className={classes.badged}/>Bank Offer 10% off on Citi Credit and Debit Cards, up to ₹1500. On orders of ₹5000 and aboveT&C</Typography>
                    <Typography><LocalOffer className={classes.badged}/>Purchase this appliance and get Extra ₹500 Off on Select Items T&C</Typography>
                    </Box>    

                    <Table>
                        <TableBody>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40 </TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                <TableCell className={classes.smallText}>
                                        <span style={{fontWeight: 600,color:'#2874f0'}}>SuperCome</span>
                                        <Typography>GST Invoice Available</Typography>
                                        <Typography>*14 days return policy*</Typography>    
                                        <Typography>View more sellers starting from ₹300</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell colSpan={2}>
                                    <img src={sellerURL} style={{width:500}}/>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </Box>
             </Box> 
        }       
        </Box>
    )
}

export default DetailView;