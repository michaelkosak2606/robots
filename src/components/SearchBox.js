import React from 'react'

const SearchBox = ({ onSearch }) => {
    return (
        <div>
            <input
                style={{ marginBottom: "20px" }}
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={event => onSearch(event)}
            />
        </div>
    )
}

export default SearchBox
