import React from 'react'

function SearchBar({ searchMovie }) {
    return (
        <div class="wrap">
            <div class="search">
                <input onChange={searchMovie}
                type="text" 
                class="searchTerm" 
                placeholder="Neyi Aramak İstersin?"
                />
            </div>
        </div>
    )
}

export default SearchBar