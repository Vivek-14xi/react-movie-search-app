import React from 'react'
import { useState } from 'react'
import "./Search.css"
export default function Search() {
  const[name,setName]=useState("batman")
  function handleSubmit(e){
    e.preventDefault();
  }
  function handleChange(e){
    setname(e.target.value)

  }
  return (
    <div>
      <form  className="search" onSubmit={handleSubmit}>
        <input type="text" value={name}  className="search input" onChange={handleChange}/>
        <button className="search button" type="submit">Search</button>
      </form>
    </div>
  )
}
