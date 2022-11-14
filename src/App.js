
import React from  'react'
import './App.css';
import Foodcard from './Components/foodcards';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from'axios';
import './css/navbar.css'  ;
import {useState,useEffect}from 'react'
import {ApiId,ApiKey} from './Components/allUrl'

function App() {

const[text,setText]=useState('')
const[list,setList]=useState("alcohol-free")
const[food,setFood]=useState([])

const submitForm=(e)=>{
  e.preventDefault()
  getData()
}
const onChange=(e)=>{

  setText(e.target.value)
  console.log(e.target.value)

 
}
const getData=async()=>{

const result= await axios.get(`https://api.edamam.com/search?q=${text}&app_id=${ApiId}&app_key=${ApiKey}&from=0&to=50&calories=591-722&health=${list}`)
    console.log(result)
setFood(result.data.hits)
}
    
 







return (
    <div className="App">
       < header className='navbar'>
       <div>
       <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiEf7C41im-FpKwZO4rgaD6wgQIenW0aGQw&usqp=CAU" alt="logo" /><div>FoodZoo</div>
       </div>
       
      
 
    </ header>
    <form className='search-for' onSubmit={submitForm}>
    <img className='search' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png" alt="search-icon" />
        <input type="text"  className='input-box'  placeholder='search'  value={text} onChange={onChange} autoComplete="off" />
        <input type="submit"  className='button-box'  value="Search"/>
        </form>

<div className='recipe'>
    {food.map((foods,index)=>
  
    <Foodcard key={index} foods={foods}  />   )
    }
      </div>


    
    </div>
  )
}


export default App