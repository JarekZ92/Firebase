import React from 'react'

import LogInForms from './LoginForms';

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

    onLogInByGoogleClickHandler = () => {
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
                            onLogInByGoogleClickHandler={this.onLogInByGoogleClickHandler}
                        />
                }
            </div>
        )
    }
}

export default Auth