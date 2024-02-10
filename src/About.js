import React from "react";
import face  from "./face.js";
import State from "./State.js"
import Users from "./Users.js"
import List from "./list.jsx";
import Card from "./Card.jsx"
import UserGreeting  from "./UserGreeting.jsx";
import Button from "./Button.jsx";
import UseStateDemo from "./UseStateDemo.jsx";
import Counter from "./Counter.jsx";
import Quantity from "./Quantity.jsx";

import MyAccordion from "./MyAccordion.js"


function About() {
  const seasons = ["Spring", "Summer", "Automation", "Winter"];

   

  return (
    <div>
      <h2>------Shoes--------</h2>

      {/* <input type="text" id="age"/> */}
      <Quantity />
      <Counter />
      <Button />
      <UseStateDemo />
       <UserGreeting isloggedIn ={true} username="alex" />
      <Card image="https://assets.ajio.com/medias/sys_master/root/20231230/NW8M/658f9ab9afa4cf41f5f78cd1/-473Wx593H-466931894-rust-MODEL.jpg" 
      brand="Adidas"
      info="1000$"/>

<Card image="https://assets.ajio.com/medias/sys_master/root/20240202/9O7F/65bd14f08cdf1e0df5e30c61/-473Wx593H-469180121-black-MODEL.jpg" 
      brand="Nike"
      info="200$"/>

<Card image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c05ba18a9d41466aa84ab76fdc0e5709_9366/ADIMOVE_SHOES_Blue_IQ8827_01_standard.jpg" 
      brand="Bata"
      info="500$"/>



<Card image="https://m.media-amazon.com/images/I/51GTXHwdyWL._SX695_.jpg" 
      brand="RedHat"
      info="600$"/>

    
      <ul>
        
        {seasons.map((season,id) => 
          <li key={id}><img src={face[id]} alt='fgfgfg'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{season}</li>
        )}
      </ul>
      <State />
      <Users />
      <List />
      {/* <MyAccordion /> */}
    
    </div>
  );
}

export default About;

   
  

