import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/dashboard'
import Questions from '../pages/questions'
import ViewQuestions from '../pages/viewQuestions'
import QuestionsInfo from "../pages/viewQuestions/components/QuestionsInfo"
import AddSubQuestion from '../pages/viewQuestions/components/AddSubQuestion'
import Customer from '../pages/customer'


const Routers = () => {
  return (
    <Routes>
        <Route element={<DashboardLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/viewQuestions' element={<ViewQuestions />} />
          <Route path='/viewQuestions/:id' element={<QuestionsInfo />} />
          <Route path="/addSubQuestions" element={<AddSubQuestion />} />
          <Route path="/customer" element={<Customer />} />
        </Route>
    </Routes>
  )
}

export default Routers