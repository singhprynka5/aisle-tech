import React from 'react';

function Loader() {
    return (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Loader;