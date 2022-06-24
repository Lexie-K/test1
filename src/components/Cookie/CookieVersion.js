import React, { useState, useLayoutEffect } from 'react'
import {useNavigate} from 'react-router'
import Cookies from 'js-cookie';

const CookieVersion = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState ();

  const navigate = useNavigate()
    
  useLayoutEffect(() => {
    Cookies.set('username', 'Alexa')
    Cookies.set('password', '12345')
  },[])
    
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    const usr = Cookies.get('username') 
    console.log(usr)
    const pwd = Cookies.get('password') 
    console.log(pwd)
    
    if(username === usr && password === pwd) {
      navigate('/success_page')
     } else {
       setErrors ('User is invalid!') 
     } 
  }  

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="form-inner">
          <h2 className="form-title">Login Form</h2> 
            <div className='error_form'>{errors}</div>
            <div className="form-group">
              <label htmlFor="username">Username:</label> 
              <input className="input-form" type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)} />
            </div> 
           
            <div className="form-group">
              <label htmlFor="password">Password:</label> 
              <input className="input-form" type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>  
           
            <input className="submit-btn"  type="submit" value="LOGIN" />
        </div> 
      </div>
    </form>  
  );  
}     

export default CookieVersion;