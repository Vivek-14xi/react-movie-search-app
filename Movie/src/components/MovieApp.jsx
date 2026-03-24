import React from 'react'
import { useState } from 'react'
import Search from './Search';
import "./MovieApp.css";
import MovieCard from './MovieCard';

export default function MovieApp() {
  return (
    <div className="app">
      <h1 className="app">🎬 Movie Search App</h1>
      
      <Search />
    </div>
  )
}
