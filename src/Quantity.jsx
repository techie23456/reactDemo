
import React,{useState} from 'react'

export default function Quantity() {

    const [quantity,setQuantity] = useState(1);
    const [name,setName] = useState("Guest")
    const handleNameChange =(event) =>{
        setName(event.target.value)
    }

    const handleQuantityChange = (event) =>{
        setQuantity(event.target.value);
    }
  return (
    <div>
        <input  value = {name } onChange={handleNameChange} />
        <p>Name : {name}</p>

        <input  value = {quantity } onChange={handleQuantityChange} type='number' />
        <p>Quantity : {quantity}</p>

      
    </div>
  )
}
