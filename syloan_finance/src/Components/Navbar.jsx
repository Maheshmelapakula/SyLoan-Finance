
import React from 'react'
import { Link } from 'react-router-dom'
// <<<<<<< helpAndSupport
import logo from './Assets/logo.jpg'
// =======
//  import logo from "./Assets/logo.jpg"
// >>>>>>> main

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
        <Link to={'/'}><img src={logo} alt="1422211" /></Link>
        
        <ul className='navList1'>
            <li className='navlist'>
                {/* <a href="#">UseCases</a> */}
                <Link to={'/product'}><a href="#">Product</a></Link>
                <Link to={'/calculator'}><a href="#">Calculator</a></Link>
                <Link to={'/ContactUs'}><a href="#">Support</a></Link>
                {/* <a href="#">Company</a>
                <a href="#">Support</a> */}
            </li>
        </ul>
        <div className='register-nav'>
        {/* /Login */}
        
        <Link to={'/Login'}><a href="#">Login</a></Link>
        <Link to={'/SignUp'}><button id='register-button'>Register</button></Link>
        
        </div>
    </nav>
        {/* {links.map((link)=>{
// =======
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
// >>>>>>> main
          return <Link to={link.path} key={link.path}>{link.title}</Link>
        })} */}

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