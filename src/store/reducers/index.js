import { combineReducers } from "redux";

import otpStatus from "./otpStatus";
import profileList from "./profileList";

export default combineReducers({
  otpStatus,
  profileList,
});
