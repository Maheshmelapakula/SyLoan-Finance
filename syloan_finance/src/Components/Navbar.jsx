import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links=[
    {
      title:'Home',
      path:'/'
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
      title:'ContactUs',
      path:'/ContactUs'
    }
  ]
  return (
    <div>
        {links.map((link)=>{
          return <Link to={link.path} key={link.path}>{link.title}</Link>
        })}
    </div>
  )
}

export default Navbar
