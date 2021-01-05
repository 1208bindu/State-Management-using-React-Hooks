import {BUY_PIZZA,ADD_PIZZA} from '../actions/pizzaActions'
// Define an initial state value for the app
const initialState = {
    numOfPizzas: 10
  }
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function pizzaReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case BUY_PIZZA:
      return { ...state, numOfPizzas: state.numOfPizzas - action.payload }
    case ADD_PIZZA:
      return { ...state, numOfPizzas: state.numOfPizzas + action.payload }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
  export default pizzaReducer;