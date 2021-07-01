import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ErrorField from "./ErrorField";
import { fetchStatus } from "../store/actions";

import { Form, Col } from 'react-bootstrap';
import { verifyOtp } from "../store/actions";


function OtpForm(props) {
    const [seconds, setSeconds] = useState(59);
    const [otp, setOtp] = useState("");
    const otpStatus = useSelector(state => state.otpStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds(false);
        }
    }, [seconds]);

    const handleOtpChange = (el) => {
        let otp = el.target.value;
        dispatch(fetchStatus(null, "CLEAR_OTP_ERROR"));
        if (!otp || Number(otp)) {
            setOtp(otp)
        }
    }

    const handleKeyUp = event => {
        let keyCode = event.keyCode || event.which;
        if (keyCode === 13) {
            validateOtp()
        }
    };

    const validateOtp = () => {
        if (otp) {
            dispatch(verifyOtp(otp, props.mobile));
        }
    }

    return (
        <>
            <Form.Label>{props.mobile}</Form.Label>
            <i className="fa fa-pencil" onClick={() => dispatch(fetchStatus(1, "CHANGE_LOGIN_STEP"))}></i>
            <h1>Enter The</h1>
            <h1>OTP</h1>

            <Form.Row>
                <Form.Group as={Col} sm="4" controlId="formGridZip">
                    <Form.Control maxLength="4" value={otp} onKeyUp={(el) => handleKeyUp(el)} onChange={(el) => handleOtpChange(el)} />
                </Form.Group>
            </Form.Row>
            {otpStatus && otpStatus.otpError ? <ErrorField error={otpStatus.otpError} /> : null}
            <button variant="primary"
                onClick={() => validateOtp()}
                type="submit" className="subButton btn">
                Continue
            </button> {seconds ? `00.${seconds}` : <span className="resend">Resend</span>}
        </>
    );
}

export default OtpForm;