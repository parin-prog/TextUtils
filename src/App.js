import './App.css'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [darkmode, setDarkMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
 // const [style, setStyle] = useState({display:'none'});

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      });

      setTimeout(() => {
        setAlert(null)
      }, 1100);
      }

  const darkMode = (value) => {
    setDarkMode(value);
      }

  return (
    <div>
      {/* <Router>

        <Navbar title= "TextUtils" about= "AboutTextUtils" setdarkmode = {darkMode} darkmode = {darkmode}/>
        <Alert alert= {alert} />

        <div className='container my-3'>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm setdarkmode = {darkMode} darkmode = {darkmode} alert= {alert} showalert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router> */}

      <BrowserRouter>
        <Navbar title= "TextUtils" about= "About" darkmode = {darkmode} setdarkmode = {darkMode} showalert={showAlert}/>
        <Alert alert= {alert} />
        <div className='container my-3'>
          <Routes>
              <Route path="/" element={<TextForm alert= {alert} showalert={showAlert} darkmode={darkmode} />}/>
              <Route path="about" element={<About darkmode={darkmode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
