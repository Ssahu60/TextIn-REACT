import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
function App() {
     const[Mode,setMode]=useState('light');                  //whether dark mode is enabled or not
     const[alert,setAlert]=useState(null);
     const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
     }


     const toggleMode=()=>{
      if (Mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled!","success");
        // document.title="TextIn - Dark Mode"
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled!","success");
        // document.title="TextIn - Light Mode"
      }
     }
     
  return (
    <>
        {/* // <Router> */}
          <Navbar title="TextIn" About="About us" mode={Mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
                {/* <Switch>
                <Route exact path="/about">
                  <About mode={Mode} />
                </Route>
              
                <Route exact path="/"> */}
                <TextForm showAlert={showAlert} heading=" TextIn - Word Counter and Character Counter,Remove Extra Spaces" mode={Mode}/>
                {/* </Route>
              </Switch> */}
          </div>
        {/* </Router>   */}
         </>



   
  );
     

}

export default App;



