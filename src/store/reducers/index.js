import { combineReducers } from "redux";

import profileList from "./profileList";
import otpStatus from "./otpStatus";

export default combineReducers({
  profileList,
  otpStatus
});
