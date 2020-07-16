import React from 'react';
import Result from './Result.jsx'
 {/* {card.map(c => (
               <Result key={c.id} result={c} openPopup={openPopup} finalResult={finalResult}/>
           ))} */}



function Results({ results, card, openPopup, finalResult}) {

  
    return (
        <section className="results">
          
           
               <Result key={finalResult.id} finalResult={finalResult} openPopup={openPopup}/>
        
        </section>
    )
}

export default Results
