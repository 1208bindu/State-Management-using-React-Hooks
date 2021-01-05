import { combineReducers } from 'redux'
import burgerReducer from './burgerReducer'
import pizzaReducer from './pizzaReducer'

const rootReducer = combineReducers({
  burger: burgerReducer,
  pizza: pizzaReducer
  
})

export default rootReducer

