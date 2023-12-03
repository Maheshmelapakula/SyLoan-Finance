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
