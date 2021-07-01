import React from 'react';

function ErrorField(props) {
    return (
        <div className="alert alert-danger" role="alert">
            {props.error}
        </div>
    );
}

export default ErrorField;