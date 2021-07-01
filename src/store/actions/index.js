import axiosInstance from "../axiosInstance";
import {
  GET_OTP_SUCCESS,
  GET_OTP_FAILED,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILED
} from "./actionType";

export const getLoginOtp = (code, mobile) => {
  return async dispatch => {
    try {
      let mobileNumber = code + "" + mobile;
      const response = await axiosInstance().post("/phone_number_login", { number: mobileNumber });
      if (response.data && response.data.status) {
        dispatch(fetchStatus(response.data, GET_OTP_SUCCESS));
      } else {
        throw new Error("Please Enter valid mobile")
      }
    } catch (err) {
      dispatch(
        fetchStatus(
          (err && err.message) ||
          "Something went wrong. Please try again later.",
          GET_OTP_FAILED
        )
      )
    }
  }
};

export const verifyOtp = (otp , mobileNumber) => {
  return async dispatch => {
    try {
      const response = await axiosInstance().post("/verify_otp", { number: mobileNumber, otp: otp });
      if (response.data && response.data.token) {
        localStorage.setItem("@tokenId", response.data.token);
        window.location.href="/profile"
        dispatch(fetchStatus(response.data, VERIFY_OTP_SUCCESS));
      } else {
        throw new Error("Invalid otp")
      }
    } catch (err) {
      dispatch(
        fetchStatus(
          (err && err.message) ||
          "Something went wrong. Please try again later.",
          VERIFY_OTP_FAILED
        )
      )
    }
  }
};

export const fetchStatus = (res, type) => {
  return {
    type: type,
    payload: res
  };
};