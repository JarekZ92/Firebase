import React from 'react'

import Default from './Default';
import Loading from './Loading';
import List from './List'
import Forms from './Forms'

import { mapObjectToArray } from '../utils'

class UserList extends React.Component {
    state = {
        newUserName: '',
        users: null,
        isLoadingUsers: false
    }

    loadUsers = () => {
        this.setState({
            isLoadingUsers: true
        })

        fetch('https://fir-sndbox.firebaseio.com/firebase-users.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: mapObjectToArray(data),
                    isLoadingUsers: false
                })
            })
    }

    newUserChangeHandler = (event) => {
        this.setState({
            newUserName: event.target.value
        })
    }

    onAddNewUserClick = () => {
        const request = {
            method: "POST",
            body: JSON.stringify({ name: this.state.newUserName })
        }

        this.setState({
            isLoadingUsers: true
        })

        fetch('https://fir-sndbox.firebaseio.com/firebase-users.json', request)
            .then(response => {
                this.loadUsers()
                this.setState({
                    newUserName: ''
                })
            })
    }

    odEditUserHandler = (key, newName) => {
        fetch(
            `https://fir-sndbox.firebaseio.com/firebase-users/${key}/.json`,
            {
                method: "PATCH",
                body: JSON.stringify({
                    name: newName
                })
            }
        )
        .then(() => {
            this.loadUsers()
        })
    }


    render() {
        return (
            <div>
                {this.state.isLoadingUsers ?
                    <Loading />
                    :
                    this.state.users ?
                        <div>
                            <Forms
                                newUserName={this.state.newUserName}
                                newUserChangeHandler={this.newUserChangeHandler}
                                onAddNewUserClick={this.onAddNewUserClick}
                            />
                            <List
                                users={this.state.users}
                                odEditUserHandler={this.odEditUserHandler}

                            />
                        </div>
                        :
                        <Default
                            clickHandler={this.loadUsers}
                            label={'Click'}
                        />
                }
            </div>
        )
    }
}

export default UserList