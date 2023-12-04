
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//         <h1>NavBar</h1>
      
//     </div>
//   )
// }

// export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
 import logo from "./Assets/logo.jpg"

const Navbar = () => {
  const links=[
    {
      title:'Home',
      path:'/'
    },
    {
      title:'product',
      path:'/product'
    },
    {
      title:'SignUp',
      path:'/SignUp'
    },
    {
      title:'Login',
      path:'/Login'
    },
    {
      title:"AboutUs",
      path:'/AboutUs'
    },
    {
      title:'ContactUs',
      path:'/ContactUs'
    },
    {
      title:'Calculator',
      path:'/calculator'
    }
  ]
  return (
    <div>
    <nav className='navPage'>
        <img src={logo} alt="1422211" />
        <ul className='navList1'>
            <li className='navlist'>
                 <a href="#">UseCases</a>
                <a href="#">Product</a>
                 <a href="#">Company</a>
                <a href="#">Support</a>
             </li>
        </ul>
         <div className='register-nav'>
         <a href="#">Login</a>
         <button id='register-button'>Register</button>
        </div>
    </nav>
        {links.map((link)=>{
          return <Link to={link.path} key={link.path}>{link.title}</Link>
        })}

    </div>
  )
}

export default Navbar

// import React from 'react'
// import { useState } from 'react'
// import './Components.css'
// import logo from "../assets/logo.jpg"

// const Navbar = () => {
//   return (
//     <nav className='navPage'>
//         <img src={logo} alt="1422211" />
//         <ul className='navList1'>
//             <li className='navlist'>
//                 <a href="#">UseCases</a>
//                 <a href="#">Product</a>
//                 <a href="#">Company</a>
//                 <a href="#">Support</a>
//             </li>
//         </ul>
//         <div className='register-nav'>
//         <a href="#">Login</a>
//         <button id='register-button'>Register</button>
//         </div>
//     </nav>
//   )
// }

// export default Navbar