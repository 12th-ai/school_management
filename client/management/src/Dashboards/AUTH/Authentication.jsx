import React from 'react'
import { Outlet } from 'react-router-dom'
import '../Style/style.css'

function Authentication() {
  return (
    <div className='main_auth'>
      <Outlet />
    </div>
  )
}

export default Authentication
