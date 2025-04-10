import React, { createContext, useState } from 'react'
import Header from './Sections/Header/Header'
import Sidebar from './Sections/Sidebar/Sidebar'
import Footer from './Sections/Footer/Footer'
import HomePage from './Pages/DashBoard/DashBoard'
import { Outlet } from 'react-router-dom'

export const mainContext = createContext();

function InventoryLayout() {

  const [token, setToken] = useState(localStorage.getItem('token') || null);

  return (
    <mainContext.Provider value={{token, setToken}}>
      <div>
        <div>
          <Header />
          <div className='flex'>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </div>
    </mainContext.Provider>
  )
}

export default InventoryLayout
