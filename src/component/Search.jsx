import React from 'react'

function Search({card, handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input type="text"
            placeholder="Search for a card"
            className="searchbox"
            onChange={handleInput}
            onKeyPress={search}/>
        </section>
    )
}

export default Search
