import React, {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { buyBurger,addBurger } from './actions/burgerActions'

const BurgerContainer=()=> {
  
  const [numBuy,setNumBuy] = useState('')
  const [numAdd,setNumAdd] = useState('')  
  
  const numBurgers = useSelector(state => state.burger.numOfBurgers)
  const dispatch = useDispatch()
  
const handleBuyClick =()=>{
  dispatch(buyBurger(parseInt(numBuy)));
  setNumBuy('')
 }
 const handleAddClick =()=>{
  dispatch(addBurger(parseInt(numAdd)));
  setNumAdd('')
 }

  return (
    <div style={{margin: "20px 50px"}}>
      { <h2>Number of Burgers - {numBurgers} </h2> }
      <input type="text" placeholder="Enter the number of Burgers bought" value={numBuy} onChange={(e)=>setNumBuy(e.target.value)}/>
      <button onClick={()=>handleBuyClick()}>Buy Burger</button> <br/>
      <input type="text" placeholder="Enter the number of Burgers added" value={numAdd} onChange={(e)=>setNumAdd(e.target.value)}/>
    
      <button onClick={()=>handleAddClick()}>Add Burger</button>
    </div>
  )
}

export default BurgerContainer


