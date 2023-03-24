import { useState } from "react";
import "./App.css";
import Acordion from "./components/Acordion";

import woman from './images/illustration-woman-online-desktop.svg'
function App() {
  return (
    <div className="App">
      
        <img className="woman" src={woman}/>
      
      <div className="acordion">
        <h1><b>FAQ</b></h1>
        <Acordion />
      </div>
    </div>
  );
}

export default App;
