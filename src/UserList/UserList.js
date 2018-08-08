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
                            />
                            <List
                                users={this.state.users}
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