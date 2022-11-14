import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';



import '../css/foodcard.css'

function Foodcard(props) {



  return (
 <div className='recipe'>
    <div className='foodcards'>
        <div className="card" style={{width:"   240px" ,backgroundColor:'rgb(12,34,43)',color:'white'}}>
  <img className="card-img-top" src={props.foods.recipe.image} alt={props.foods.label}/>
  <div className='full-cards'>
    <h5 className="card-title">{props.foods.recipe.label}</h5>
   <div className='btn-full'>
    <a href={props.foods.recipe.url}className="bnt">See more
    </a>
    </div>

</div>
</div>
      
    </div>
    </div>
  ) 
}

export default Foodcard
