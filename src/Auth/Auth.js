import React from 'react'

import LogInForms from './LoginForms';

import { auth, googleProvider } from '../FirebaseConfig'

class Auth extends React.Component {
    state = {
        isLogedIn: false,
        logInEmail: '',
        logInPassword: ''
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

    onEmailChangedHandler = event => this.setState({ logInEmail: event.target.value })
    onPasswordChangedHandler = event => this.setState({ logInPassword: event.target.value })

    onLogInByEmailAndPasswordClickHandler = () => {
        auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
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
                            emailValue={this.state.logInEmail}
                            passwordValue={this.state.logInPassword}
                            onEmailChangedHandler={this.onEmailChangedHandler}
                            onPasswordChangedHandler={this.onPasswordChangedHandler}
                            onLogInByEmailAndPasswordClickHandler={this.onLogInByEmailAndPasswordClickHandler}
                        />
                }
            </div>
        )
    }
}

export default Auth