import React, {useState} from 'react';
import Search from './component/Search.jsx'
import Results from './component/Results.jsx'
import Popup from './component/Popup.jsx'
import CardData from './data';


export default function App () {
    const [state, setState] = useState({
        s:"",
        results: [],
        selected:{},
        finalResult : [],
        card: CardData
    })
    const handleInput = e => {
        let s = e.target.value;
        setState(prevState => {
            return {...prevState, s: s}
        })
        
    }
    const search = e => {
        if(e.key === "Enter"){
            let result = e.target.value
            
            setState(prevState => {
                return {...prevState, results: result}
            })
            
        }
    }
    const openPopup = id => {
        const filtered = state.card.filter(c => (
            c.id === id
        ))
        
        setState(prevState => {
            return { ...prevState, selected: filtered[0] }
        })
        console.log(filtered[0].name)
    }
    const closePopup = () => {
        setState(prevState => {
            return{
                ...prevState, selected: {}
            }
        })
    }

    // const filteredCard = e => {
    //     let finalC = card.filter(
    //         (c) => {
    //             return c.name === results
    //         }
    //     )
    //     setState(prevState => {
    //         return {...prevState, finalResult: finalC}
    //     })
    // }

    return(
        <main>
            <header>
                <h1>Card Search</h1>
            </header>

            <Search card={state.card}
            handleInput={handleInput}
            search={search}
            />
            <Results results={state.results}
            card={state.card}
            openPopup={openPopup}
            />
            {(typeof state.selected.id !== "undefined") ? <Popup selected={state.selected}
            closePopup={closePopup}/>
            : false}
        </main>
    )
}