import React from 'react'
import Header from './Sections/Header/Header'
import Sidebar from './Sections/Sidebar/Sidebar'
import Footer from './Sections/Footer/Footer'
import HomePage from './Pages/DashBoard/DashBoard'
import { Outlet } from 'react-router-dom'

function InventoryLayout() {
  return (
    <div>
    <Header/>
  <div className='flex'>
      <Sidebar/>
      <Outlet/>
  </div>
    </div>
  )
}

export default InventoryLayout
