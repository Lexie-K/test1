import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MuiFirst from '../Pages/MuiFirst';
import CssSecond from '../Pages/CssSecond';
import StyledThird from '../Pages/StyledThird';

const RouterList = () => (
  <Routes>
    <Route path='/mui_page' element={<MuiFirst />} />
    <Route path='/css_page' element={<CssSecond />} />
    <Route path='/styled_page' element={<StyledThird />} />
  </Routes>
)

export default RouterList