import {createStore} from 'redux'
import PizzaReducer from './Pizza/PizzaReducer'

const store=createStore(PizzaReducer)
export default store