import React, { useState } from 'react'
// import {app} from "../../firebaseConfig";
// import {app} from "../../firebaseConfig";
// import { app } from "../../firebaseConfig";
// import {app} from "./../firebaseConfig";
import {app} from "../../firebaseConfig";

import Home from '../../Pages/Home';

import './LoginSignup.css';
// import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const LoginSignup = ({toggleAuth,setToggleAuth}) => {
    const LoginSignup = () => {
    const[action,setAction]=useState("Sign Up");
    // const []
    // const [toggleAuth,setToggleAuth]=useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    let auth=getAuth();

     // Google
     let googleProvider=new GoogleAuthProvider();
     // Google

     const navigate = useNavigate();
    // console.log(email,password)
    const handleSignup=async(e)=>{
        e.preventDefault();
        if(email==''||password==''){
            alert('Fill all the fields')
        }else{
            try {
                console.log('first');
                const response = await createUserWithEmailAndPassword(auth, email, password);
                console.log(response);
                setAction("Sign Up");
                navigate('/')
                // navigate('/Home'); 
                // setToggleAuth(true);
              } catch (error) {
                alert(error.message);
              }
            // console.log('first');
            // createUserWithEmailAndPassword(auth,email,password)
            // .then((response)=>{
            //     console.log(response);
            //     setAction("Sign Up");
            //     // setToggleAuth(true);
            // }).catch((error)=>{
            //     alert(error.message);
            // })
        }
        
    }
        // Google
        const handleGoogle=()=>{
            signInWithPopup(auth,googleProvider)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                alert(error.message)
            })
        }

        
        const handleComponent = () => {
          
            navigate('/Login'); 
          };
  return (
    <div className='container'>
     
        <div className="header">
            <div className='text' >Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
        {/* <div className="input">
            <img src={user_icon} alt="" />
                <input type='text' placeholder= "Enter Your Name" />
        </div> */}
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder= 'Enter Your Email' name={email} onChange={(e)=>setEmail(e.target.value)}/>
                {/* <input type='email' value={email} onChange={handleEmail}/> */}
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Enter Password' name={password} onChange={(e)=>setPassword(e.target.value)}/>
                {/* <input type='password' value={password} onChange={handlePassword} /> */}
        </div>
        </div>
       
        <div className='forgot-password'><span>Forgot Password?</span></div>
        <div className='submit-container'>
        <button onClick={handleSignup}>Signup</button>
        {/* <button onClick={handleLogin}>Login</button> */}
        <button onClick={handleGoogle}>Google</button>
        <button onClick={handleComponent}>Already have an account? Login</button>
        
        </div>

    </div>
  )
}

export default LoginSignup
// import './LoginSignup.css';
// import user_icon from '../Assets/person.png';
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';

   {/* <form action="" onSubmit={handleSubmit}>
            <input type="email" name='email' value={details.email} onChange={handleChange}/>
            <input type="password" name='password' value={details.password} onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form> */}

        // const[details,setDetails]=useState({
    //     email:'',
    //     password:''
    // })
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const handleChange=(e)=>{
    //     // console.log(e.target);
    //     e.preventDefault();

    //     const {name,value}=e.target;
    //     console.log('signUp',name,value)  
    //     setDetails({...details,[name]:value});     
    // }

    // const handleChange=(e)=>{
    //     // console.log('change')
    //     const {name,value}=e.target;
    //     console.log(name,value)
    //     setDetails({...details,[name]:value})
    // }
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log('submit')
    // }
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log('first');
    //     createUserWithEmailAndPassword(auth,details.email,details.password)
    //     .then((response)=>{
    //         console.log(response)
    //     }).catch((error)=>{
    //         alert(error.message);
    //     })
    // }