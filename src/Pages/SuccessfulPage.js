import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const SuccessfulForm = () => {
  return (
    <>
      <p className='successful_title'> Välkommen! </p> 
      <div className='linkStyled'> 
        <Link to ='/'>Back to Form</Link>
        <br/>
        <Link to ='/localstorage_page'>Back to LocalStorage Form</Link>
        <br/>
        <Link to ='/cookie_page'>Back to Cookie Form</Link>
        <br/>
        <Link to ='/sessionstorage_page'>Back to SessonStorage Form</Link>
      </div>  
    </>
    );
}

export default SuccessfulForm;