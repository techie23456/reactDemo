import React from 'react'

export default function Button() {
    let count = 0;
    const handleClick = (e) =>{

      if(count === 0){
        e.target.textContent = "I am Happy 🤪 Tap me to make me Sad";
        count=1;
      }
      else{
        e.target.textContent = "I am Sad 😂 Tap me to make me Happy";
        count=0;
      }

    } 
  return (
   <button  style={{height: '100px', width : '300px',border:'10px solid red',padding:'10px'}} onClick={(e)=>handleClick(e)}>click me </button>
  )
}
