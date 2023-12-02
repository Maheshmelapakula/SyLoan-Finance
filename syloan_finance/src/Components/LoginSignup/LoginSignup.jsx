import React, { useState } from 'react'
import {app} from "../../firebaseConfig";

import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginSignup = () => {
    let auth=getAuth();
    const[action,setAction]=useState("Sign Up");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSignup=(e)=>{
        e.preventDefault();
        console.log('first');
        createUserWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            alert(error.message);
        })
    }
  return (
    <div className='container'>
     
        {/* <div className="header">
            <div className='text' >{action}</div>
            <div className='underline'></div>
        </div> */}
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
        <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>
        <div className='submit-container'>
        <button onClick={handleSignup}>Signup</button>
        {/* <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div> */}
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