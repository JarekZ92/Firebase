import React from 'react'

const Default = (props) => (
    <div>
        <button
            onClick={props.clickHandler}
        >
            {props.label}
        </button>
    </div>
)

export default Default