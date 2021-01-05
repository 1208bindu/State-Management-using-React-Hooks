import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
 import { buyPizza,addPizza } from './actions/pizzaActions'

 
const PizzaContainer=()=> {
  const [numBuy,setNumBuy] = useState('')
  const [numAdd,setNumAdd] = useState('')

  const numPizzas = useSelector(state => state.pizza.numOfPizzas)
  const dispatch = useDispatch()
  
  
  const handleBuyClick =()=>{
    dispatch(buyPizza(parseInt(numBuy)));
    setNumBuy('')
  }
  const handleAddClick =()=>{
    dispatch(addPizza(parseInt(numAdd)));
    setNumAdd('')
  }

  return (
    <div style={{margin: "20px 50px"}}>
    <h2>Number of Pizzas - {numPizzas} </h2>
    <input type="text" placeholder="Enter the number of Pizzas bought" value={numBuy} onChange={(e)=>setNumBuy(e.target.value)}/>
    <button onClick={()=>handleBuyClick()}>Buy Pizza</button> <br/>
    <input type="text" placeholder="Enter the number of Pizzas added" value={numAdd} onChange={(e)=>setNumAdd(e.target.value)}/>
    <button onClick={()=>handleAddClick()}>Add Pizza</button>
   
    
    </div>
  )
}


export default PizzaContainer