import React, { useState, useEffect } from 'react';
import { AppBar, 
         Toolbar,
         Typography,
         IconButton,
         Switch,
         FormControlLabel,
         FormGroup,
         MenuItem,
         Button,
         Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }));

function Navbar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)

    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };


    return (
    <div className={classes.root}>

    <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            FishTips
        </Typography>
        {props.auth ?
            <div>
            <IconButton onClick={handleMenu}>
                <AccountCircle />
            </IconButton>
               <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right',}} keepMounted transformOrigin={{veritcal: "top", horizontal: 'right'}} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
               </Menu> </div>
                :
                <div>
            <Button>Login</Button>
            
            </div>
}
<Switch checked={props.darkState} onChange={props.setTheme} />
        </Toolbar>
    </AppBar>
    </div>
    );
  }

  export default Navbar;