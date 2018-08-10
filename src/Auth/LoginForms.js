import React from 'react'

import LoginByGoogle from './LoginByGoogle'
import LogInByEmailAndPassword from './LogInByEmailAndPassword'
import CreateUserWithEmailAndPassword from './CreateUserWithEmailAndPassword'

const LoginForms = (props) => (
    <div>
        <LoginByGoogle
            onLogInClickHandler={props.onLogInByGoogleClickHandler}
        />
        <LogInByEmailAndPassword
            emailValue={props.logInProps.emailValue}
            passwordValue={props.logInProps.passwordValue}
            onEmailChangedHandler={props.logInProps.onEmailChangedHandler}
            onPasswordChangedHandler={props.logInProps.onPasswordChangedHandler}
            onLogInClickHandler={props.logInProps.onLogInByEmailAndPasswordClickHandler}
        />
        <CreateUserWithEmailAndPassword
            emailValue={props.singUpProps.emailValue}
            passwordValue={props.singUpProps.passwordValue}
            onEmailChangedHandler={props.singUpProps.onEmailChangedHandler}
            onPasswordChangedHandler={props.singUpProps.onPasswordChangedHandler}
            onSignUpClickHandler={props.singUpProps.onSignUpByEmailAndPasswordClickHandler}
        />
    </div>
)

export default LoginForms