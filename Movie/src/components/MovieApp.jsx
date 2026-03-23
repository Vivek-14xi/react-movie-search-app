import React from 'react'
import { useState } from 'react'
import Search from './Search';
import "./MovieApp.css";

export default function MovieApp() {
  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>
      <Search />
    </div>
  )
}
