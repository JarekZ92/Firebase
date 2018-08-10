import React from 'react'

import LoginByGoogle from './LoginByGoogle'
import LogInByEmailAndPassword from './LogInByEmailAndPassword'

const LoginForms = (props) => (
    <div>
        <LoginByGoogle
            onLogInClickHandler={props.onLogInClickHandler}
        />
        <LogInByEmailAndPassword
            emailValue={props.onEmailChangedHandler}
            passwordValue={props.passwordValue}
            onEmailChangedHandler={props.onEmailChangedHandler}
            onPasswordChangedHandler={props.onPasswordChangedHandler}
            onLogInClickHandler={props.onLogInClickHandler}
        />
    </div>
)

export default LoginForms