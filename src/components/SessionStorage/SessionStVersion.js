import React, { useState, useLayoutEffect } from 'react'
import {useNavigate} from 'react-router'

const SessionStVersion = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState ();
  
  const navigate = useNavigate()
  
  useLayoutEffect(() => {
    sessionStorage.setItem('username', 'Alexa')
    sessionStorage.setItem('password', '12345')
  },[])

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
     
    const user = sessionStorage.getItem('username')
    const pass = sessionStorage.getItem('password')
    
    if(username === user && password === pass) {
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

export default SessionStVersion;