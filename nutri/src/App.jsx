import { useState } from 'react'
import './App.css'
import FoodData from "./resources/FoodData"
import SearchBox from './components/SearchBox'
import React from 'react'
import FoodBox from './components/FoodBox'

function App() {

  const [search, setSearch] = useState("")

  const filteredData = FoodData.filter((element)=>{
    return element.name.toLowerCase().includes(search.toLowerCase())
  }) 

  return (
    <div>
      <h1>Pro-nutrition App</h1>
      <SearchBox setSearch = {setSearch} />
      {
        filteredData.length <= 0 ? null : (
          filteredData.map((ele, i) => (
            <FoodBox key={i} element = {ele} index= {i}/>
          ))
        )
      }
    </div>
  )
}

export default App
