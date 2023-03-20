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
  const [mode, setMode] = useState('dark');
  const [swtch, setSwtch] = useState(false);
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

  const removeBodyClasses= ()=> {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const darkMode = (cls) => {
    if (cls!==null) {
    const msg = cls.charAt(0).toUpperCase() + cls.slice(1);
    removeBodyClasses();
    document.body.classList.add('bg-' +cls);
    showAlert(`Enjoy ${mode.charAt(0).toUpperCase() + mode.slice(1)} mode on this page has enabled now!!!`, msg);
    setSwtch(swtch===false ? true : false);
    }

    else if (darkmode === 'light' && cls=== null) {
      
      document.body.style.backgroundColor = '#254e7a';
      document.body.style.color = 'white';
      setSwtch(true);
      setMode('light');
      setDarkMode('dark');
      setInterval(() => {
        document.title = 'Dark mode is on';
      }, 1000);
      setInterval(() => {
        document.title = 'Turn Light mode';
      }, 2000);

    } else {
      
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setSwtch(false);
      setMode('dark');
      setDarkMode('light');
      setInterval(() => {
        document.title = 'Light mode is on';
      }, 2000);
    }

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
        <Navbar title= "TextUtils" about= "About" darkmode = {darkmode} swtch={swtch} setSwtch={setSwtch} setdarkmode = {darkMode} mode={mode}/>
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
