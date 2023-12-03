import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import { ContactUs } from '../Pages/ContactUs'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          
      </Routes>
    </div>
  )
}

export default AllRoutes
