import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { useState } from 'react';
import Login from './Components/LoginSignup/Login';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes'

function App() {
  const [toggleAuth,setToggleAuth]=useState(false);
  return (
    <div className="App">
      {/* {toggleAuth?<Login setToggleAuth={setToggleAuth} toggleAuth={toggleAuth}/>:<LoginSignup setToggleAuth={setToggleAuth} toggleAuth={toggleAuth}/>} */}
      <Navbar/>
      <AllRoutes/>
      {/* <AllRoutes */}
    </div>
  );
}

export default App;
