import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
    const location = useLocation()

  return (
    <div className='w-full overflow-hidden'>
        <div className={`${location.pathname === "/questions" ? "hidden" : "block"} relative w-full`}>
            <Header />
        </div>
        <div className={`${location.pathname === "/questions" ? "mt-[56px]" : ""} flex w-full  mt-24 relative gap-8`}>
            <div className='w-[10%] fixed overflow-y-auto '>
                <Sidebar />
            </div>
            <div className='w-[85%] ml-[12%]'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout