import axiosInstance from "../axiosInstance";
import {
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILED,
} from "./actionType";

export const fetchProfile = () => {
  return async dispatch => {
    try {
      let token = localStorage.getItem("@tokenId");
      const response = await axiosInstance(token).get("/test_profile_list");

      dispatch(fetchStatus(response.data, FETCH_PROFILE_SUCCESS));
    } catch (err) {
      dispatch(fetchStatus(err, FETCH_PROFILE_FAILED));
    }
  };
};

export const fetchStatus = (res, type) => {
    return {
      type: type,
      payload: res
    };
  };



