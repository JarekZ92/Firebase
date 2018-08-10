import React from 'react'

import LogInByGoogle from './LoginByGoogle'

const LogInForms = (props) => (
    <div>
        <LogInByGoogle
            onLogInClickHandler={props.onLogInClickHandler}
        />
    </div>
)

export default LogInForms