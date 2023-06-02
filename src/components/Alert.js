import React from 'react'
import './Alert.css'

export default function Alert(a) {


  return (
      <div className='alert-box' style={{height: '50px'}}>
      {a.alert &&
      <div className='alert'>
        <strong>{a.alert.type}!!! : </strong>{a.alert.msg}<span className='closebtn'></span>
      </div>}
      </div>
  )
}
