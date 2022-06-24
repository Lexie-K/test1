import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CookiePage from '../Pages/CookiePage'
import LocalStPage from '../Pages/LocalStPage'
import SessionStPage from '../Pages/SessionStPage'
import SuccessfulForm from '../Pages/SuccessfulPage'

const RouterList = () => (
  <Routes>
    <Route path ='/cookie_page' element={<CookiePage />} />
    <Route path ='/localstorage_page' element={<LocalStPage />} />
    <Route path ='/sessionstorage_page' element={<SessionStPage />} /> 
    <Route path ='/success_page' element={<SuccessfulForm />} />   
  </Routes>
)

export default RouterList;