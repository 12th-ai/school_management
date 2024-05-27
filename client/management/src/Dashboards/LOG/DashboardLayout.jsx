import React from 'react'
import Sidebar from './Sidebar'
import Header from './header'
import '../Style/style.css'
import { Outlet } from 'react-router-dom'


function DashboardLayout() {
  return (
    <div className='main'> 
     <div className="left-side">
  <Sidebar />
     </div>
     <div className="main-app">
     <div className="header">
      <Header />
     </div>
         <Outlet />
     </div>
    </div>
  )
}

export default DashboardLayout
