import React from 'react'

const Login = () => {
    const[action,setAction]=useState("Login");
    return (
        <div className='container'>
         
            <div className="header">
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            <div className="input">
                <img src={email_icon} alt="" />
                    <input type='email' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                    <input type='password' />
            </div>
            </div>
            <div className='submit-container'>
            <button>Login</button>
            {/* <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div> */}
            </div>
    
        </div>
      )
}

export default Login
