import React, { useState, useEffect } from 'react';
import {makeStyles} from  '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Tab, Tabs} from '@material-ui/core'
import {
    MemoryRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home.js'
import Tides from './Tides.js'
import MapTracker from './MapTracker.js'

function Navibar(props) {
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }


return (
    <MemoryRouter>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    FishTips
                </Typography>
            </Toolbar>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="secondary"
                centered
                >
                <Tab to={"/"} label="Home" component={Link}/>
                <Tab to={"/tides"} label="Tides and Weather" component={Link}/>
                <Tab to={"/maptracker"} label="Map Tracker" component={Link}/>
            </Tabs>
        </AppBar>
        <hr />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tides" component={Tides}/>
            <Route path="/maptracker" component={MapTracker}/>
        </Switch>
    </MemoryRouter>
);
}
  export default Navibar;