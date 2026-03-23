import React from 'react'
import { useState } from 'react'
import "./Search.css"
export default function Search() {
  
  return (
    <div>
      <form  className="search">
        <input type="text"   className="search input"/>
        <button className="search button" type="submit">Search</button>
      </form>
    </div>
  )
}
