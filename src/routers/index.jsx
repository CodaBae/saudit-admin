import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/dashboard'
import Questions from '../pages/questions'

const Routers = () => {
  return (
    <Routes>
        <Route element={<DashboardLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/questions' element={<Questions />} />
        </Route>
    </Routes>
  )
}

export default Routers