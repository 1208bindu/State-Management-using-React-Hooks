import {BUY_BURGER,ADD_BURGER} from '../actions/burgerActions'
// Define an initial state value for the app
const initialState = {
    numOfBurgers: 10
  }
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function burgerReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case BUY_BURGER:
      return { ...state, numOfBurgers: state.numOfBurgers - action.payload }
    case ADD_BURGER:
      return { ...state, numOfBurgers: state.numOfBurgers + action.payload }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
  export default burgerReducer;