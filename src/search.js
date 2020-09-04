import React from 'react';
import './search.css';

const SearchBox = (props) => {
    return(
        <div>
            <p>
                Search functionality coming soon!
            </p>
            <input type='search'
            className='search'
            placeholder = {props.placeholder}
            onChange = {props.handleChange}
            />
        </div>
    )
}

export default SearchBox