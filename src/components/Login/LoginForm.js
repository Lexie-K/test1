import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './Login.css'


const LoginForm = () => {
  
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const user = useSelector(state => state.loginInfo.username);
  const pass = useSelector(state => state.loginInfo.password);
  const auth =useSelector(state => state.loginInfo.isAuth);
  const errorAlert = useSelector(state => state.loginInfo.errorMessage);
  const error = useSelector(state => state.loginInfo.error);
  
  const dispatch =useDispatch();
  
  const navigate = useNavigate();

  const LOGIN = () => {
    if(user === username && pass === password) 
      return {
      type: "SET_USER",   
    }
    else return {
      type: "USER_INVALID",    
    } 
  }
    
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    auth ? navigate('/success_page') : navigate ('/');
  } 
                          
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="form-inner">
          <h2 className="form-title">Login Form</h2> 
            {error ? <div className='error_form'>{errorAlert}</div> : []}
            <div className="form-group">
              <label htmlFor="username">Username:</label> 
              <input className="input-form" type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)} />  
            </div> 
           
            <div className="form-group">
              <label htmlFor="password">Password:</label> 
              <input className="input-form" type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />  
            </div>  
           
            <input className="submit-btn"  type="submit" value="LOGIN" onClick={()=> dispatch(LOGIN({username, password}))} />
        </div> 
      </div>
    </form>  
  );  
}     

export default LoginForm;