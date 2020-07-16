import React from 'react'

function Result({result}) {
    return (
        <div className="result">
            <img src={result.img}/>
            <h3>{result.name}</h3>
        </div>
    )
}

export default Result
