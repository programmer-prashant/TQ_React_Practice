import React ,{useReducer} from 'react'
const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
            case 'decrement':
                return state-1
                case 'reset':
                    return initialState
                    default:
                        return state
    }
}
function CounterThree() {
    const[count,dispatch]= useReducer(reducer,initialState)
    const[count1,dispatch1]=useReducer(reducer,initialState)

    return (
        <div>
              <div> count : {count}</div>
              <div> count 1: {count1}</div>

            <h1> counter component</h1>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
<div>
    
            <button onClick={()=>dispatch1('increment')}>increment</button>
            <button onClick={()=>dispatch1('decrement')}>decrement</button>
            <button onClick={()=>dispatch1('reset')}>reset</button>
            </div>
        </div>
    )
}

export default CounterThree
