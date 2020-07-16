import React from 'react'

function Error(props) {
    return (
    <h3>Your Browser has been infected by a malware {props.errorName}</h3>
    );
}

export default Error;