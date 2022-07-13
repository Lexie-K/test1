import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormPage from '../Pages/formPage'
import LoginChangePage from '../Pages/LoginChangePage'

const RouterList = () => (
  <Routes> 
    <Route path ='/' element={<FormPage />} />
    <Route path ='/loginchange_page' element={<LoginChangePage />} />   
  </Routes>
)

export default RouterList;