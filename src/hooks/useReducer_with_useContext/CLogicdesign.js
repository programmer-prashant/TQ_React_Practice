import React, { useContext } from 'react'
import {CountContext} from '../App'
function CLogicDesign() {
    const countContext=useContext(CountContext)
    return (
        <div>
            {countContext.countState}

            <h4> computer logic design  component </h4>
            <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>reset</button>


        </div>
    )
}

export default CLogicDesign
