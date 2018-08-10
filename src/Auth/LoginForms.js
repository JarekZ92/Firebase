import React from 'react'

import LoginByGoogle from './LoginByGoogle'
import LogInByEmailAndPassword from './LogInByEmailAndPassword'

const LoginForms = (props) => (
    <div>
        <LoginByGoogle
            onLogInClickHandler={props.onLogInByGoogleClickHandler}
        />
        <LogInByEmailAndPassword
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            onEmailChangedHandler={props.onEmailChangedHandler}
            onPasswordChangedHandler={props.onPasswordChangedHandler}
            onLogInClickHandler={props.onLogInByEmailAndPasswordClickHandler}
        />
    </div>
)

export default LoginForms