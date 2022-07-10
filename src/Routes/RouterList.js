import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormPage from '../Pages/FormPage'
import SuccessfulForm from '../Pages/SuccessfulPage'

const RouterList = () => (
  <Routes> 
    <Route path ='/' element={<FormPage />} />
    <Route path ='/success_page' element={<SuccessfulForm />} />   
  </Routes>
)

export default RouterList;