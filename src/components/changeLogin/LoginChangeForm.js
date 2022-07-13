import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updateLogin } from '../../Store/auth/reducer'


const LoginChangeForm = () => {
  const { isAuth, errorExistMessage, errorExist } = useSelector(({ auth }) => auth);
  
  const [newUsername, setUsername] = useState();
  const [newPassword, setPassword] = useState();
  
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect (() => {
    !isAuth ? navigate('/') : navigate('/loginchange_page');
  }, [isAuth, navigate])
 
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    dispatch(updateLogin(newUsername, newPassword));      
  } 
    
  return (   
    <form onSubmit={handleFormSubmit}>
    <div className="container">
      <div className="form-inner">
        <h2 className="form-title">Change Your Details</h2> 
        {errorExist ? <div className='error_form'>{errorExistMessage}</div> : []}
          <div className="form-group">
            <label htmlFor="username">Username:</label> 
            <input className="input-form" type="text" name="username" value={newUsername} onChange={(e)=> setUsername(e.target.value)} />  
          </div> 

          <div className="form-group">
            <label htmlFor="password">Password:</label> 
            <input className="input-form" type="password" name="password" value={newPassword} onChange={(e)=> setPassword(e.target.value)} />  
          </div>  
        
          <div className='btn-container'>
            <input className="submit-btn"  type="submit" value="UPDATE" />
          </div>
      </div> 
    </div>
  </form>  
);  
}       

export default LoginChangeForm;