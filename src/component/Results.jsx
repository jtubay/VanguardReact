import React from 'react';
// import Result from './Result.jsx'



function Results({ results, card}) {

  
    return (
        <section className="results">
           {card.map(c => (
               <div key={c.id}>
                   <h1>{c.name}</h1>
                    <img src={c.img}/>

               </div>
           ))}
        </section>
    )
}

export default Results
