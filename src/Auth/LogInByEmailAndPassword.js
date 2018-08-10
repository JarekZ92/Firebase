import React from 'react'


const LogInByEmailAndPassword = (props) => (
    <div>
        <div>
            <input
                type="text"
                onChange={props.onEmailChangedHandler}
                value={props.emailValue}
            />
        </div>
        <div>
            <input
                type="password"
                onChange={props.onPasswordChangedHandler}
                value={props.emailValue}
            />
        </div>
        <div>
            <button
                onClick={props.onLogInClickHandler}
            >
                Log in!
        </button>
        </div>
    </div>
)

export default LogInByEmailAndPassword