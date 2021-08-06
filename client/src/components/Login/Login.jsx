import React , { useState,useEffect } from 'react';
import { Box,Button, Dialog, DialogContent,makeStyles, TextField, Typography } from "@material-ui/core";
import { authenticateSignup ,authenticateLogin} from '../../service/api.js';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important',
        background:'#ffbb00'
        

    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: 'black',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        width: '40%',
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
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    },
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
};

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};


const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

     const onInputChange = (e) => {
         setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    
    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
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
                            <TextField  onChange={(e) => onValueChange(e)} name='username' label='Enter Username' InputProps={{className: classes.multilineColor}} />
                            {error &&< Typography  className={classes.error}>Please enter valid Username</Typography>} 
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' InputProps={{className: classes.multilineColor}} />
                            <Typography className={classes.text}>By continuing, you agree to Foreqe's Terms of Use and Privacy Policy.</Typography>
                            <Button className={classes.loginbtn} style={{background:'#FB641B'}} onClick={ () => loginUser()} >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn} style={{background:'#fff'}}>Request OTP</Button>
                            <Typography className={classes.createText} onClick={() => toggleSignup()}>New to Foreqe? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                            <Button className={classes.loginbtn} style={{background:'black'}} onClick={ () => signupUser()}>Continue</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>


    )
}
export default Login;