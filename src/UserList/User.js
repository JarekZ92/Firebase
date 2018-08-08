import React from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {
    render() {
        return (
            <div>
                <button>
                    Edit!
                    </button>
                {this.props.user.name}
            </div>
        )
    }

}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User