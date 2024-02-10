import React from 'react';
import './Card.css';

export default function Card({image,brand,info}) {
  return (

  //  https://assets.ajio.com/medias/sys_master/root/20231201/W5dD/656a08b6afa4cf41f5ae7224/-473Wx593H-466844429-mustard-MODEL.jpg
    <div className='card'>
        
        <img src ={image} width="200" height="200"></img>
        <h2>{brand}</h2>
        <p>{info}</p>
        <button><h3>Add To Cart</h3></button>
        
    </div>
  )
}
