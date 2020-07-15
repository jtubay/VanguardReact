import React from 'react'

function Search({card}) {
    return (
        <div>
            {card.map(c => (
                <h1 key={c.id}>{c.name}</h1>
            ))}
            
        </div>
    )
}

export default Search
