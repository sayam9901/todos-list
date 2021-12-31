
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavbarComp  from "./components/NavbarComp";
import  About  from "./components/About";
import  TextForm  from "./components/TextForm";
import Alert from './components/Alert'; 
//import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);

  }

   
  const toggleMode= ()=>{
   if(mode==="light"){
     setMode('dark');
     document.body.style.backgroundColor='grey';
     showAlert("drak mode has been activated","success");
   }
   else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been activated","success");
   }
  }


  return (
    <>
    <Router>
     <NavbarComp title="logo" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container">
     <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextForm showAlert={showAlert}heading="Enter Your Text Here" mode={mode} />}/>
        </Routes>
     </div>
     </Router>
    </>

   
  );
}




export default App;
