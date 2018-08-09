import React from 'react'

import LogInForms from './LogInForms';

import { auth, googleProvider } from '../FirebaseConfig'

class Auth extends React.Component {
    state = {
        isLogedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isLogedIn: true
                })
            } else {
                this.setState({
                    isLogedIn: false
                })
            }
        })
    }

    onLogInClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => {
                console.log(error)
                alert('Błąd logowania!')
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