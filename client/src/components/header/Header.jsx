  
import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import Search from './SearchBar';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';


const useStyle = makeStyles(theme => ({
    header: {
        background: '#171717',
        height: 55
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        fontSize: 20,
        fontWeight:600,
        fontStyle:'italic'
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#FFE500',
        fontWeight: 600
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }
}));

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <AppBar position="fixed" className={classes.header}>
            <ToolBar>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                 <Link to='/' className={classes.component}> 
                
                    <Typography className={classes.logo} >Foreqe</Typography>
                    <Box component="span" className={classes.container}>
                        <Typography className = {classes.subHeading}>One <Box component="span" style={{color:'#FFE500'}}>Solution</Box></Typography>
                    </Box>
                </Link>
                <Search />
                <span className={classes.customButtons}><CustomButtons /></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;