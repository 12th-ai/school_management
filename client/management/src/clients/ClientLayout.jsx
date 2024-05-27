import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './component/NavBar'
import Footer from './component/Footer'

function ClientLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default ClientLayout
