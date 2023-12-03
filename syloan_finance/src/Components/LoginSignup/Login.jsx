import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png'; 
import Home from '../../Pages/Home';
// import {app} from ""

// const Login = ({toggleAuth,setToggleAuth}) => {
const Login = () => {
    const[action,setAction]=useState("Login");
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    let auth=getAuth();

    // Google
    let googleProvider=new GoogleAuthProvider();
    // Google
    const navigate = useNavigate();
    console.log(email,password)
    // const handleLogin=(e)=>{
    //     e.preventDefault();
    //     console.log('first');
    //     signInWithEmailAndPassword(auth,email,password)
    //     .then((response)=>{
    //         console.log(response);
    //         navigate('/')
    //         // setToggleAuth(false);
    //     }).catch((error)=>{
    //         alert(error.message);
    //     })
    // }
     const handleLogin = async (e) => {
  e.preventDefault();
  
  try {
    console.log('first');
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    navigate('/');
    // setToggleAuth(false);
  } catch (error) {
    alert(error.message);
  }
};

    const handleComponent = () => {
        navigate('/SignUp');
        // Navigate('/SignUp');
      };
    return (
        <div className='container'>
         
            <div className="header">
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            <div className="input">
                <img src={email_icon} alt="" />
                    <input type='email' placeholder='Enter Mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            </div>
            <div className='submit-container' style={{ textAlign: 'center' }}>
            <button style={{ margin: '10px' }} onClick={handleLogin}>Login</button>
            {/* <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div> */}
            
            <button style={{ margin: '10px' }} onClick={handleComponent}>I don't have account</button>
            </div>
    
        </div>
      )
}

export default Login
