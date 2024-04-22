import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
    const location = useLocation()

  return (
    <div className='w-full overflow-hidden'>
        <div className={`${location.pathname === "/questions" ? "hidden" : "block"}`}>
            <Header />
        </div>
        <div className={`${location.pathname === "/questions" ? "mt-[56px]" : ""} flex w-full gap-8`}>
            <div className='w-[10%]'>
                <Sidebar />
            </div>
            <div className='w-[85%]'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout