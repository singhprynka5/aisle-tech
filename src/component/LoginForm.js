import React from 'react';
import { Form, Col } from 'react-bootstrap';
import ErrorField from "./ErrorField";
import { useSelector } from "react-redux";

function LoginForm(props) {
  const otpStatus = useSelector(state => state.otpStatus);

    return (
        <>
            <Form.Label>Get OTP</Form.Label>
            <h1>Enter Your</h1>
            <h1>Phone Number</h1>
            <Form.Row>
                <Form.Group controlId="formGridState">
                    <Form.Control className="code" defaultValue={props.code} readOnly />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="formGridZip">
                    <Form.Control onKeyUp={(el) => props.handleKeyUp(el)}
                        onChange={(el) => props.handleMobileNum(el)} maxLength="10"
                        value={props.mobile} />
                </Form.Group>
            </Form.Row>
            {otpStatus && otpStatus.mobileError ? <ErrorField error={otpStatus.mobileError} /> : null}
            <button variant="primary"
                onClick={() => props.validateMobile()}
                type="submit" className="subButton btn">
                Continue
            </button>
        </>
    );
}

export default LoginForm;