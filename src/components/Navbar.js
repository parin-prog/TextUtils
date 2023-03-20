import React from 'react'
import Proptypes from 'prop-types'
import { Outlet, Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(a) {

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
          <div className='bg-primary rounded mx-2' onClick={()=>{a.setdarkmode('primary')}} style={{height:'20px', width:'30px'}}></div>
          <div className='bg-danger rounded mx-2' onClick={()=>{a.setdarkmode('danger')}} style={{height:'20px', width:'30px'}}></div>
          <div className='bg-success rounded mx-2' onClick={()=>{a.setdarkmode('success')}} style={{height:'20px', width:'30px'}}></div>
          <div className='bg-warning rounded mx-2' onClick={()=>{a.setdarkmode('warning')}} style={{height:'20px', width:'30px'}}></div>
        </div>

        <div className='mode'>
          <label className='switch' >
            <input type='checkbox' checked={a.swtch} onClick={()=>{a.setdarkmode(null)}} onChange={(e)=>{console.log(e.target.value)}} />
            <span className='slider round'></span>
          </label>&nbsp;
          Enable {a.mode.charAt(0).toUpperCase() + a.mode.slice(1)} Mode
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
