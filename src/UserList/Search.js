import React from 'react'

const Search = (props) => (
    <div>
        <input
            type="text"
            value={props.searchPhrase}
            onChange={props.onSearchPraseChanged}
        />
    </div>
)

export default Search