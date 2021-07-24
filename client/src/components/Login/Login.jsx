import  { useState, useEffect } from 'react';
import { Box,Button, Dialog, DialogContent,makeStyles, TextField, Typography } from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '75vh',
        background:'#ffbb00'
        

    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: 'black',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '55vh',
        width: '30%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        //background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: 'green',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    // error: {
    //     fontSize: 11,
    //     color: '#ff6161',
    //     lineHeight: 0,
    //     marginTop: 10,
    //     fontWeight: 600
    // },
    multilineColor:{
        color:'black'
    }
})

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    // const [ login, setLogin ] = useState(loginInitialValues);
    // const [ signup, setSignup ] = useState(signupInitialValues);
    // const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    // useEffect(() => {
    //     showError(false);
    // }, [login])

    // const onValueChange = (e) => {
    //     setLogin({ ...login, [e.target.name]: e.target.value });
    // }

    // const onInputChange = (e) => {
    //     setSignup({ ...signup, [e.target.name]: e.target.value });
    // }

    // const loginUser = async() => {
    //     let response = await authenticateLogin(login);
    //     if(!response) 
    //         showError(true);
    //     else {
    //         showError(false);
    //         handleClose();
    //         setAccount(login.username);
    //     }
    // }

    // const signupUser = async() => {
    //     let response = await authenticateSignup(signup);
    //     if(!response) return;
    //     handleClose();
    //     setAccount(signup.username);
    // }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }
    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Box>

                    {
                        account.view === 'login' ? 
                        <Box className={classes.login}>
                            <TextField  name='username' label='Enter Email/Mobile number' InputProps={{className: classes.multilineColor}} />
                            {/*<Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography> */}
                            <TextField  name='password' label='Enter Password' InputProps={{className: classes.multilineColor}} />
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button className={classes.loginbtn} style={{background:'#FB641B'}} >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn} style={{background:'#fff'}}>Request OTP</Button>
                            <Typography className={classes.createText} onClick={() => toggleSignup()}>New to Flipkart? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.login}>
                            <TextField  name='firstname' label='Enter Firstname' />
                            <TextField  name='lastname' label='Enter Lastname' />
                            <TextField  name='username' label='Enter Username' />
                            <TextField  name='email' label='Enter Email' />
                            <TextField  name='password' label='Enter Password' />
                            <TextField  name='phone' label='Enter Phone' />
                            <Button className={classes.loginbtn} >Continue</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>


    )
}
export default Login