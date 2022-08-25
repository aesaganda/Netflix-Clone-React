import React from 'react'

function SearchBar({ searchMovie }) {
    return (
        <div class="wrap">
            <div class="search">
                <input onChange={searchMovie}
                type="text" 
                class="searchTerm" 
                placeholder="What are you looking for?"
                />
            </div>
        </div>
    )
}

export default SearchBar