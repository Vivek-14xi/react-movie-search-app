import React from 'react'
import "./MovieCard.css"
export default function MovieCard({ movieName }) {
  return (
    <div className="card">
      <img src={movieName.Poster} alt={movieName.Title} className=""/>
      <h3>{movieName.Title}</h3>
      <p class>{movieName.Year}</p>
    </div>
  )
}
