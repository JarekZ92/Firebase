import React from 'react'


const CreateUserWithEmailAndPassword = (props) => (
    <div>
        <div>
            <input
                type="email"
                onChange={props.onEmailChangedHandler}
                value={props.emailValue}
            />
        </div>
        <div>
            <input
                type="password"
                onChange={props.onPasswordChangedHandler}
                value={props.passwordValue}
            />
        </div>
        <div>
            <button
                onClick={props.onSignUpClickHandler}
            >
                Log in!
        </button>
        </div>
    </div>
)

export default CreateUserWithEmailAndPassword