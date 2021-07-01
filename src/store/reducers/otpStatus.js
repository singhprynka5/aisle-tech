import {
    GET_OTP_SUCCESS,
    GET_OTP_FAILED
  } from "../actions/actionType";
  
  const initialState = {
    step: 1
  };
  
  const otpStatus = (state = initialState, action) => {
    switch (action.type) {
      case GET_OTP_SUCCESS:
        return {
          ...state,
          step: 2
        };
      case GET_OTP_FAILED:
        return {
          ...state,
          step: 1
        };
      default:
        return {
          ...state
        };
    }
  };
  
  export default otpStatus;
  