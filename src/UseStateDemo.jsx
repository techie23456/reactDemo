import React, { useState } from 'react'

export default function UseStateDemo() {
    const [name,setName] = useState("Guest")
    const [isEmployed,setisEmployed] = useState(false)
    const UpdateName =()=>{
        setName("Avinash")
    }

    const toggleEmpStatus =()=>{

        console.log("object",isEmployed)
        setisEmployed(!isEmployed)
    }
  return (
    <div>
        <p> 🫥 Name : {name}</p>
        <p> 🫥 Employment : {isEmployed? "YES" : "NO" }</p>
        <button style={{height: '100px', width : '300px',border:'10px solid red',padding:'10px'}}  onClick={UpdateName}>Please Tap Here</button>

        <button style={{height: '100px', width : '300px',border:'10px solid red',padding:'10px'}}  onClick={toggleEmpStatus}>Toggle Employment Status</button>
      
    </div>
  )
}
