import React from 'react'
import Default from './Default';
import Loading from './Loading';
import List from './List'

class UserList extends React.Component {
    state = {
        users: null,
        isLoadingUsers: false
    }

    loadUsers = () => {
        this.setState({
            isLoadingUsers: true
        })

        fetch('https://fir-sndbox.firebaseio.com/.json')
            .then(response => response.json())
            .then(data => this.setState({
                users: data,
                isLoadingUsers:false
            }))
    }

    render() {
        return (
            <div>
                {this.state.isLoadingUsers ?
                    <Loading />
                    :
                    this.state.users ?
                        <List />
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