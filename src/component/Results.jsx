import React from 'react';
import Result from './Result.jsx'



function Results({ results, card, openPopup}) {

  
    return (
        <section className="results">
           {card.map(c => (
               <Result key={c.id} result={c} openPopup={openPopup}/>
           ))}
        </section>
    )
}

export default Results
