import React from 'react'
import PropTypes from 'prop-types'

const User = (props) => (
    <div>
        <button>
            Edit!
            </button>
        {props.user.name}
    </div>

)

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User