import React from 'react';

const SearchBar = (props) => {
	return (
        <div className="search">
            <span className="search-icon icon">
                <i className="fas fa-search"></i>
            </span>
            <input type="text" className="search-input" placeholder={props.placeholder}>
            </input>
        </div>
	);
};

export { SearchBar };
