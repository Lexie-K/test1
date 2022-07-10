const initialState = { 
    username: "Alexa",
    password: "12345",
    isAuth: false,
    error: false,
    errorMessage: null,
}

const userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "SET_USER": 
      return {
        ...state,
        isAuth: true, 
        error: false,
        username: "Alexa",
      }  
    case "USER_INVALID": 
      return {
        ...state,
        isAuth: false,
        error: true, 
        errorMessage: 'User is invalid!',   
      }  
    default: 
      return state;   
  }         
}

export default userReducer;



