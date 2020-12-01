import React, { useState, useEffect } from 'react';
import './App.css';
import { AppBar, 
         Toolbar,
         Typography,
         IconButton,
         Switch,
         FormControlLabel,
         FormGroup,
         MenuItem,
         Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange, lightBlue, deepPurple, deepOrange} from "@material-ui/core/colors";
import Navbar from './components/Navbar.js'



function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [auth, setAuth] = useState(true);
  const [darkState, setDarkState] = useState(false);
  const palleteType = darkState ? "dark" : "light"
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];


  const darkTheme = createMuiTheme({
    palette: { 
      type: palleteType,
    primary: {
      main: mainPrimaryColor
    },
    secondary: {
      main: mainSecondaryColor
    }
  }});


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      let date = new Date(data.time * 1000)
      setCurrentTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
        <div color="inherit">
                <FormGroup>
                <FormControlLabel control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                label={auth ? "Logout" : "Login"} />
                </FormGroup>
                <Navbar auth={auth} setTheme={handleThemeChange} theme={darkState}/>
                <div>
                  <Card color="inherit">
                  <p>Welcome to FishTips!</p>
                  <p>The current time is {currentTime}</p>
                  </Card>

                </div>

          </div>
    </ThemeProvider>);
    
}

export default App;
