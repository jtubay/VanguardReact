import React from 'react'

function Result({result, openPopup, finalResult}) {
    return (
       
        <div className="result" onClick={()=>openPopup(finalResult.id)}>
            <img src={finalResult.img}/>
            <h3>{finalResult.name}</h3>
        </div>
    )
}

export default Result
