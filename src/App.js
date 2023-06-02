import './App.css'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  const [darkmode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('dark');
  const [swtch, setSwtch] = useState(false);
  // const [style, setStyle] = useState({display:'none'});

  let myStyle = {
    color: darkmode === 'dark' ? 'white' : '#042743',
    backgroundColor: darkmode === 'dark' ? '#042743' : 'transparent'
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  const darkMode = (cls) => {
    if (cls === 'dark') {
      setDarkMode('dark');
      setSwtch(true);
      setMode('light');
      const msg = cls.charAt(0).toUpperCase() + cls.slice(1);
      removeBodyClasses();
      showAlert(`Enjoy ${mode.charAt(0).toUpperCase() + mode.slice(1)} mode on this page has enabled now!!!`, msg);
    } else if (cls === 'light') {
      setDarkMode('light');
      setSwtch(false);
      setMode('dark');
      const msg = cls.charAt(0).toUpperCase() + cls.slice(1);
      removeBodyClasses();
      showAlert(`Enjoy ${mode.charAt(0).toUpperCase() + mode.slice(1)} mode on this page has enabled now!!!`, msg);
    } else {
      setDarkMode('light');
      setSwtch(false);
      setMode('Color');
      const msg = cls.charAt(0).toUpperCase() + cls.slice(1);
      removeBodyClasses();
      document.body.classList.add('bg-' + cls);
      showAlert(`Enjoy ${mode.charAt(0).toUpperCase() + mode.slice(1)} mode on this page has enabled now!!!`, msg);
    }
  }


  return (

    <div className='App' style={myStyle}>
      <Navbar title="TextUtils" about="About" darkmode={darkmode} swtch={swtch} setSwtch={setSwtch} setdarkmode={darkMode} mode={mode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/" element={<TextForm myStyle={myStyle} alert={alert} showalert={showAlert} darkmode={darkmode} />} />
          <Route path="/about" element={<About darkmode={darkmode} />} />
        </Routes>
      </div>
      <Footer  myStyle={myStyle} darkmode={darkmode}/>
    </div>

  );
}

export default App;
