import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/dashboard'
import Questions from '../pages/questions'
import ViewQuestions from '../pages/viewQuestions'
import QuestionsInfo from "../pages/viewQuestions/components/QuestionsInfo"

const Routers = () => {
  return (
    <Routes>
        <Route element={<DashboardLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/viewQuestions' element={<ViewQuestions />} />
            <Route path='/viewQuestions/:id' element={<QuestionsInfo />} />
        </Route>
    </Routes>
  )
}

export default Routers