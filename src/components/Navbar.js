import React from 'react'
import Proptypes from 'prop-types'
import { Outlet, Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.darkmode} bg-${props.darkmode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-wrap">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">&nbsp;Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">&nbsp;{props.about}</Link>
          </li>
          <li className="nav-item">
            <div className='theme-palletes d-flex align-items-center'>
              <div className='bg-primary rounded mx-2' onClick={() => { props.setdarkmode('primary') }} style={{ height: '25px', width: '30px' }}></div>
              <div className='bg-danger rounded mx-2' onClick={() => { props.setdarkmode('danger') }} style={{ height: '25px', width: '30px' }}></div>
              <div className='bg-success rounded mx-2' onClick={() => { props.setdarkmode('success') }} style={{ height: '25px', width: '30px' }}></div>
              <div className='bg-warning rounded mx-2' onClick={() => { props.setdarkmode('warning') }} style={{ height: '25px', width: '30px' }}></div>
            </div>
          </li>
          <li className="nav-item">
            <div className='dmode mx-3'>
              <label htmlFor='dmode'>
                <div className='switch'>
                  <input type='checkbox' id='dmode' checked={props.swtch} onClick={() => { props.setdarkmode(props.darkmode === 'light' ? 'dark' : 'light') }} onChange={(e) => { console.log(e.target.value) }} />
                  <span className='slider round'></span>
                </div>&nbsp;
                Enable {props.mode.charAt(0).toUpperCase() + props.mode.slice(1)} Mode
              </label>
            </div>
          </li>
        </ul>
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
