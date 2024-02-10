import React from 'react'

export default function Users() {

    const user = [
        {name:"Sam" ,age:26, address :"Noida"},
        {name:"Tim" ,age:20, address :"Delhi"},
        {name:"Aryan" ,age:16, address :"Patna"},
    ];
  return (
        <div> <h1>####</h1>
        {
               user.map((item,id) => 
               <li key={id}>
               <span>{item.name}&nbsp;&nbsp;</span>
               <span>{item.age}&nbsp;&nbsp;</span>
               <span>{item.address}</span>
               </li>)
        }



        </div>)
           
      
}
