// import React from 'react'

// const AllRoutes = () => {
//   return (
//     <div>
//       <h1>Routing</h1>
//     </div>
//   )
// }

// export default AllRoutes
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'

import { ContactUs } from '../Pages/ContactUs'

import LoginSignup from '../Components/LoginSignup/LoginSignup'
import Login from '../Components/LoginSignup/Login'
import Calculator from '../Pages/Calculator'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<LoginSignup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          {/* <Route path='/calculator' element={<Calculator/>}/> */}
      </Routes>
    </div>
  )
}

export default AllRoutes

