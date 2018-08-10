import React from 'react'

import LogInForms from './LoginForms'

import { auth, googleProvider } from '../FirebaseConfig'

class Auth extends React.Component {
    state = {
        isLogedIn: false,
        logInEmail: '',
        logInPassword: '',
        signUpEmail: '',
        signUpPassword: ''

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

    logInFunctions = {
        onEmailChangedHandler: event => this.setState({ logInEmail: event.target.value }),
        onPasswordChangedHandler: event => this.setState({ logInPassword: event.target.value }),
        onLogInByEmailAndPasswordClickHandler: () => {
            auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd logowania!')
                })
        }
    }

    singUpFunctions = {
        onEmailChangedHandler: event => this.setState({ signUpEmail: event.target.value }),
        onPasswordChangedHandler: event => this.setState({ signUpPassword: event.target.value }),
        onSingUpByEmailAndPasswordClickHandler: () => {
            auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd logowania!')
                })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLogedIn ?
                        <div>
                            <div>
                                <button
                                    onClick={() => auth.signOut()}
                                >
                                    Log Out!
                                </button>
                            </div>
                            {this.props.children}
                        </div>
                        :
                        <LogInForms
                            onLogInByGoogleClickHandler={this.onLogInByGoogleClickHandler}
                            logInProps={{
                                emailValue: this.state.logInEmail,
                                passwordValue: this.state.logInPassword,
                                onEmailChangedHandler: this.logInFunctions.onEmailChangedHandler,
                                onPasswordChangedHandler: this.logInFunctions.onPasswordChangedHandler,
                                onLogInByEmailAndPasswordClickHandler: this.logInFunctions.onLogInByEmailAndPasswordClickHandler
                            }}
                            singUpProps={{
                                emailValue: this.state.signUpEmail,
                                passwordValue: this.state.signUpPassword,
                                onEmailChangedHandler: this.singUpFunctions.onEmailChangedHandler,
                                onPasswordChangedHandler: this.singUpFunctions.onPasswordChangedHandler,
                                onSignUpByEmailAndPasswordClickHandler: this.singUpFunctions.onSingUpByEmailAndPasswordClickHandler
                            }}
                        />
                }
            </div>
        )
    }
}

export default Auth