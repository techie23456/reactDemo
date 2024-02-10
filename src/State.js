import React,{useState} from 'react'

export default function State() {
 
    const [val,setVal]= useState("avinash");

    const test = (e)=>{

        console.log("test function",e.target.value)
        setVal(e.target.value);
    }
 
    return (
    <div>
        <h1>UsState Demo</h1>
        <input type ="text" value = {val} onChange={test} />
        <button onClick={()=>alert(val)}>Click Me</button>

      
    </div>
  )
}
