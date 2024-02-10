
import React,{useState} from 'react'

export default function Counter() {

   const [count,setCount] = useState(0);

    const incr = () =>{
        setCount(count + 1)
    }

    const decr = () =>{
        setCount(count - 1)
    }

    const reset = () =>{
        setCount(0)
    }

    
  return (
    <div> <p style={{height: '100px', width : '300px',border:'10px solid red',padding:'10px',color:'white',textAlign:'center',lineHeight:'100px'}}>Count : {count}</p>
    <button  style={{height: '100px', width : '100px',border:'10px solid red',padding:'10px'}}  onClick={incr}> +</button>
    <button  style={{height: '100px', width : '100px',border:'10px solid red',padding:'10px'}}  onClick={reset}> Reset</button>
    <button  style={{height: '100px', width : '100px',border:'10px solid red',padding:'10px'}}  onClick={decr}> -</button>
      
    </div>
  )
}
