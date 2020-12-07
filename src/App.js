import React, { useState, useEffect } from 'react';
import {
  MemoryRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navibar from './components/Navibar.js'
import FishId from './components/FishId.js'



function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [auth, setAuth] = useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      let date = new Date(data.time * 1000)
      setCurrentTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    });
  }, []);

  return (
    <Navibar />
  ) 
  
}

export default App;
