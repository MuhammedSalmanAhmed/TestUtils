import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
  }
  setTimeout(()=>{
    setAlert(null)
  },1500)

  const ToggleMode = ()=>{
    if( mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor="grey"
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="about" mode={mode} ToggleMode={ToggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element=<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode}/> />
        </Routes>
      {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
