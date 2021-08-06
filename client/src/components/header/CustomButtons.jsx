import React, { useState, useContext } from 'react';
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import {LocalShipping} from '@material-ui/icons';
import LoginDialog from '../login/Login.jsx';
import { LoginContext } from '../../context/ContextProvider.jsx';
import { useSelector } from 'react-redux';
import Profile from './Profile.jsx';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    contain: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: 'black',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        marginTop: 7,
        [theme.breakpoints.down('sm')]: {
            background: 'black',
            color: '#FFFFFF',
            
        }   
    }
}));


const CustomButtons = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

     const cartDetails = useSelector(state => state.cart);
     const { cartItems } = cartDetails;

    const openLoginDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account = {account} setAccount={setAccount}/> : 
               <Link>
                    <Button className={classes.login} variant="contained" onClick={() => openLoginDialog()} >Login</Button>
                </Link>
            }
             <Link className={classes.contain}> 
                <Badge badgeContent={cartItems.length} color="secondary">
                <LocalShipping/>
                </Badge>
                <Typography style={{ marginLeft: 8 }}> Fastest Delivery </Typography>
                   
            </Link>
                <Link to='/cart' className={classes.container}>
                <Badge  badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
               </Link> 
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} /> 
        </Box>
             
    )
}

export default CustomButtons;