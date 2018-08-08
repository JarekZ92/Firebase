import React from 'react'
import PropTypes from 'prop-types'

const User = (props) => (
    <div>
        {props.user.name}
    </div>

)

User.propTypes = {
    users: PropTypes.array.isRequired
}

export default User