import React, { useState } from 'react'
import Proptypes from 'prop-types'
import { Outlet, Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(a) {

  const [mode, setMode] = useState('dark');
  const [swtch, setSwtch] = useState(false);
  
  function darkMode() {

    if (a.darkmode === 'light') {
      document.body.style.backgroundColor = '#254e7a';
      document.body.style.color = 'white';
      setSwtch(true);
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
      setInterval(() => {
        document.title = 'Light mode is on';
      }, 2000);
    }

    setMode(mode === 'light' ? 'dark' : 'light');
    a.setdarkmode(a.darkmode === 'light' ? 'dark' : 'light');
    a.showalert(`Enjoy ${mode.charAt(0).toUpperCase() + mode.slice(1)} mode on this page has enabled now!!!`, "Success");
  }
  
  return (
      <nav className={`navbar navbar-expand-lg navbar-${a.darkmode} bg-${a.darkmode}`}>
        <Link className="navbar-brand" to="/">{a.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{a.about}</Link>
            </li>
          </ul>
        </div>

        <div className='d-flex'>
          <div className='bg-primary rounded mx-2' onClick={darkMode} style={{height:'30px', width:'30px'}}></div>
        </div>

        <div className='mode'>
          <label className='switch' >
            <input type='checkbox' checked={swtch} onChange={darkMode} />
            <span className='slider round'></span>
          </label>&nbsp;
          Enable {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
        </div>
        <Outlet />
      </nav>
  )
}

Navbar.propTypes = {
    title: Proptypes.string.isRequired,
    about: Proptypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Title here',
    about: 'About here'
}
