import {BUY_PIZZA} from './PizzaTypes'


const initialState={
    numOfPizza:10
}
const PizzaReducer=(state=initialState,action)=>{
switch(action.type){
    case BUY_PIZZA:return{
        ...state,numOfPizza:state.numOfPizza-1
    }
    default:return state
}
}

export default PizzaReducer