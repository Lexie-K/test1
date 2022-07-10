import React from 'react'
import { useSelector } from 'react-redux'
import '../index.css'

const SuccessfulForm = () => {
  
  const name = useSelector(state => state.loginInfo.username);
  const auth =useSelector(state => state.loginInfo.isAuth);
  
  if (auth) {
    return (   
      <p className='successful_title'>Välkommen {name}!</p> 
    )
  }
}


export default SuccessfulForm;