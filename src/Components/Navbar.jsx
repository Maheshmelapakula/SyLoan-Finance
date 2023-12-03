import React from 'react'
import { useState } from 'react'
import './Components.css'
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
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
  )
}

export default Navbar