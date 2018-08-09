import React from 'react'

import Default from './Default';
import Loading from './Loading';
import List from './List'
import Forms from './Forms'
import Search from './Search'

import { mapObjectToArray } from '../utils'

import { database } from '../FirebaseConfig'

class UserList extends React.Component {
    state = {
        newUserName: '',
        searchPhrase: '',
        users: null,
        isLoadingUsers: false
    }

    intUsersSync = () => {
        this.setState({
            isLoadingUsers: true
        })

        database.ref('/firebase-users').on(
            'value',
            snapshot => {
                const data = snapshot.val()
                this.setState({
                    users: mapObjectToArray(data),
                    isLoadingUsers: false
                })
            }
        )
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
                this.intUsersSync()
                this.setState({
                    newUserName: ''
                })
            })
    }

    odEditUserHandler = (key, newName) => {
        database.ref(`/firebase-users/${key}`).update({
            name: newName
        })
    }

    onSearchPraseChanged = event => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {
        const filteredUsers = this.state.users && this.state.users.filter(
            user => user.name.indexOf(this.state.searchPhrase) !== -1
        )
        return (
            <div>
                {this.state.intUsersSync ?
                    <Loading />
                    :
                    this.state.users ?
                        <div>
                            <Forms
                                newUserName={this.state.newUserName}
                                newUserChangeHandler={this.newUserChangeHandler}
                                onAddNewUserClick={this.onAddNewUserClick}
                            />
                            <Search
                                searchPhrase={this.searchPhrase}
                                onSearchPraseChanged={this.onSearchPraseChanged}
                            />
                            <List
                                users={filteredUsers}
                                odEditUserHandler={this.odEditUserHandler}
                            />
                        </div>
                        :
                        <Default
                            clickHandler={this.intUsersSync}
                            label={'Click'}
                        />
                }
            </div>
        )
    }
}

export default UserList