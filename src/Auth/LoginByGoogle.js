import React from 'react'

const LogInByGoogle = (props) => (
    <div>
        <button
            onClick={props.onLogInClickHandler}
        >
            Login by Google!
        </button>
    </div>
)

export default LogInByGoogle