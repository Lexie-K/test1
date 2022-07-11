import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './Login.css'
import { login } from '../../Store/auth/reducer'


const LoginForm = () => {
  const [localUsername, setUsername] = useState();
  const [localPassword, setPassword] = useState();

  const { isAuth, errorMessage, error } = useSelector(({ auth }) => auth);
  
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  useEffect(() => {
    isAuth ? navigate('/success_page') : navigate('/');
  }, [isAuth, navigate])
    
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    dispatch(login(localUsername, localPassword))
  } 
                          
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="form-inner">
          <h2 className="form-title">Login Form</h2> 
            {error ? <div className='error_form'>{errorMessage}</div> : []}
            <div className="form-group">
              <label htmlFor="username">Username:</label> 
              <input className="input-form" type="text" name="username" value={localUsername} onChange={(e)=> setUsername(e.target.value)} />  
            </div> 
           
            <div className="form-group">
              <label htmlFor="password">Password:</label> 
              <input className="input-form" type="password" name="password" value={localPassword} onChange={(e)=> setPassword(e.target.value)} />  
            </div>  
           
            <input className="submit-btn"  type="submit" value="LOGIN" />
        </div> 
      </div>
    </form>  
  );  
}     

export default LoginForm;