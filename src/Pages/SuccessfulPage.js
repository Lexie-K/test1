import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exit } from '../Store/auth/reducer';
import '../index.css'

const SuccessfulForm = () => {
  const { username, isAuth } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (!isAuth) {
      handleExit()
    }
  }, [isAuth])

  const handleExit = () => {
    dispatch(exit())
  }
  
  return (   
    <>
      <p className='successful_title'>Välkommen {username}!</p>
      <button onClick={handleExit}>Выйти</button>
    </>
  )
}


export default SuccessfulForm;