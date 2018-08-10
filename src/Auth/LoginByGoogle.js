import React from 'react'

const LogInByGoogle = (props) => (
    <div>
        <button
            onClick={props.onLogInClickHandler}
        >
            Login!
        </button>
    </div>
)

export default LogInByGoogle