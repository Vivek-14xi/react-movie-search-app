import React, { useState, useEffect } from "react";
import "./Search.css";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

export default function Search() {
  const [name, setName] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=6679fbe8&s=${name}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          setError(data.Error);
          setMovies([]);
        } else {
          setMovies(data.Search);
          setError(null);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  return (
    <div>
      <form className="search">
        <input
          type="text"
          value={name}
          className="search-input"
          onChange={handleChange}
        />
        <button className="search button" type="submit"  onSubmit={handleSubmit}>
          Search
        </button>
      </form>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movieName={movie} />
        ))}
      </div>
    </div>
  );
}