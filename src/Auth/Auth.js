import React from 'react'

const isLogedIn = false

const Auth = (props) => (
    <div>
        {
            isLogedIn ?
                props.children
                :
                'Not loged in!!'
        }
    </div>
)

export default Auth