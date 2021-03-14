import React,{useReducer} from 'react'
const initialState={
    firstCounter:0,
    secondCounter:3
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value};
            case 'decrement':
                return  {...state,firstCounter:state.firstCounter-action.value};
                case 'reset':
                    return initialState
                    case 'incrementTwo':
                        return {...state,secondCounter:state.secondCounter+action.value}
                        case 'decrementTwo':
                            return {...state,secondCounter:state.secondCounter-action.value}
                    default:
                        return state
    }
}
function CounterTwo() {
    const[count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <div> count- {count.firstCounter} </div>
            <div> count- {count.secondCounter} </div>

            <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>

            <button onClick={()=>dispatch({type:'increment',value:5})}>increment_5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>decrement_5</button>

            <button onClick={()=>dispatch({type:'incrementTwo',value:1})}>increment_2</button>
            <button onClick={()=>dispatch({type:'decrementTwo',value:1})}>decrement_2</button>


            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )
}

export default CounterTwo
