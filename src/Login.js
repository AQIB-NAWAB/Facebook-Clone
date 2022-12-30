import React, { useState } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './Login.css';
const Login = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
    //   event.preventDefault();
  
    //   navigate('https://www.google.com/',{replace: true});
    }

  return(
        <>
        <div className='main' id="data">
        <div className='logo_section'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" /> 
            <p>Facebook helps you connect and share<br/> with the people in your life.</p>
        </div>
        <div className='form_section'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Email address ' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button  id="login" type='submit'>Log In</button>
                <a href='#'>Forgotten Password</a>
                <br></br><br></br>
                <hr></hr>
                <br></br>
                <button id="account">Create New Account</button>
            </form>
            <p style={{marginTop:"20px"}}><strong>Create a Page </strong>for a celebrity, brand or business.</p>
        </div>

    </div>
        </>
  )
    
}
export default Login