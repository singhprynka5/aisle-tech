import {
  GET_OTP_SUCCESS,
  GET_OTP_FAILED,
  CLEAR_MOBILE_ERROR,
  VERIFY_OTP_FAILED,
  CLEAR_OTP_ERROR,
  CHANGE_LOGIN_STEP
} from "../actions/actionType";

const initialState = {
  step: 1,
  mobileError: "",
  otpError: ""
};

const otpStatus = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTP_SUCCESS:
      return {
        ...state,
        step: 2,
        mobileError: ""
      };
    case GET_OTP_FAILED:
      return {
        ...state,
        step: 1,
        mobileError: action.payload
      };
    case VERIFY_OTP_FAILED:
      return {
        ...state,
        otpError: action.payload
      };
    case CLEAR_MOBILE_ERROR:
      return {
        ...state,
        mobileError: ""
      };
    case CLEAR_OTP_ERROR:
      return {
        ...state,
        otpError: ""
      };
    case CHANGE_LOGIN_STEP:
      return {
        ...state,
        mobileError: "",
        otpError: "",
        step: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default otpStatus;
