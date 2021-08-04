import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Box, makeStyles,Typography,Button} from '@material-ui/core';
import {removeFromCart} from '../../redux/actions/cartActions'
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
//components
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

const useStyle = makeStyles(theme=>({

    component: {
        marginTop: 55,
        padding: '30px 135px',
        
        background: '#666769',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
        
    },
    leftComponent: {
        width: '67%',
       
    },
    header: {
        padding: '15px 24px',
        background: 'black'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 30,
        width: 250,
        height: 51
    }
}));

const Cart = () => {


const classes = useStyle();    
const {cartItems} = useSelector(state => state.cart);
const  dispatch = useDispatch();

useEffect(() => {
    
    console.log(cartItems);
    
})

const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
}

const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'dhruvrathee2000@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
}

    return (

        <>
            {
                cartItems.length ?
                
                <Box className={classes.component}>
                        <Box className={classes.leftComponent}>
                                <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18,color:'#fff'}}>My Cart ({cartItems?.length})</Typography>
                                </Box>
                                {   cartItems.map(item => (
                                 
                                    <CartItem item ={item} removeItemFromCart={removeItemFromCart}/>   
                                
                            ))
                        }
                        <Box className={classes.bottom}>
                            <Button onClick={() => buyNow()} variant="contained" className={classes.placeOrder}>Place Order</Button>
                        </Box>
                        </Box>
                        
                        <TotalView cartItems={cartItems}/>

                        

                        {/* <p>Hello value</p>  */}
                   


                </Box>  : <EmptyCart/>
            }
        
        </>


    )
}

export default Cart;