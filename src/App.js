import React, {useState} from 'react';
import Search from './component/Search.jsx'
import Results from './component/Results.jsx'
import CardData from './data';


export default function App () {
    const [state, setState] = useState({
        s:"",
        results: [],
        selected:{},
        card: CardData
    })
    console.log(state.card)

    return(
        <div>
            <Search card={state.card}/>
        </div>
    )
}