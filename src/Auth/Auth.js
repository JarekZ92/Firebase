import React from 'react'

import LogInForms from './LogInForms';

class Auth extends React.Component {
    state ={
        isLogedIn: false
    }

    onLogInClickHandler = () => {
        this.setState({
            isLogedIn: true
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLogedIn ?
                        this.props.children
                        :
                        <LogInForms 
                        onLogInClickHandler={this.onLogInClickHandler}
                        />
                }
            </div>
        )
    }
}

export default Auth