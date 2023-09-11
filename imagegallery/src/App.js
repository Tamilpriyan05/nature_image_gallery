import logo from './logo.svg';
import './App.css';
import Naturegallery from './Naturegallery';
import Button from './Nbutton';
import { useState } from "react";
import "./lap.css";
import "./Tab.css"
import "./Mini.css"
import "./Phone.css"
import "./Phonemini.css"
import "./Last.css"


function App() {
  

  const [get,setGet]=useState("");

  function getdata(a){
      setGet(a)   
  }
  
  return (
    <div>
    
    <Button senddata={getdata}/>
    <Naturegallery send={get}/>
    </div>
  );
}

export default App;
