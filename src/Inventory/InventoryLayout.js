import React from 'react'
import Header from './Sections/Header/Header'
import Sidebar from './Sections/Sidebar/Sidebar'
import Footer from './Sections/Footer/Footer'
import HomePage from './Pages/HomePage/HomePage'
import { Outlet } from 'react-router-dom'

function InventoryLayout() {
  return (
    <div>
    <Header/>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default InventoryLayout
