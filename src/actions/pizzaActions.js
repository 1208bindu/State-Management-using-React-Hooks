export const BUY_PIZZA = 'BUY_PIZZA'
export const ADD_PIZZA = 'ADD_PIZZA'

export  function buyPizza(number=1)
{
  return{
    type:BUY_PIZZA,
    payload:number
  }
}
export  function addPizza(number=1)
{
  return{
    type:ADD_PIZZA,
    payload:number
  }
}

