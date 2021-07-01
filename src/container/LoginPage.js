import React, { useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import OtpForm from "../component/OtpForm";
import LoginForm from "../component/LoginForm";

import { getLoginOtp, fetchStatus } from "../store/actions";


function LoginPage() {
  const otpStatus = useSelector(state => state.otpStatus);

  const [mobile, setMobile] = useState("")
  const code = "+91";
  const dispatch = useDispatch();

  const handleMobileNum = (el) => {
    let tel = el.target.value;
    dispatch(fetchStatus(null, "CLEAR_MOBILE_ERROR"));

    if (!tel || Number(tel)) {
      setMobile(tel)
    }
  }

  const handleKeyUp = event => {
    let keyCode = event.keyCode || event.which;
    if (keyCode === 13) {
      validateMobile()
    }
  };

  const validateMobile = () => {
    if (mobile.length) {
      dispatch(getLoginOtp(code, mobile));
    }
  }

  return (
    <div className="app">
      {otpStatus && otpStatus.step === 2 ?
        <OtpForm mobile={code + "" + mobile} /> :
        <LoginForm handleMobileNum={handleMobileNum}
          code={code} mobile={mobile}
          handleKeyUp={handleKeyUp}
          validateMobile={validateMobile}
        />}
    </div>
  );
}

export default LoginPage;