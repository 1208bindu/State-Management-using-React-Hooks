export const BUY_BURGER = 'BUY_BURGER'
export const ADD_BURGER = 'ADD_BURGER'

export  function buyBurger(number=1)
{
  return{
    type:BUY_BURGER,
    payload:number
  }
}
export  function addBurger(number=1)
{
  return{
    type:ADD_BURGER,
    payload:number
  }
}

