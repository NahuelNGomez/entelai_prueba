import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/searchBar";
import Pagination from "./components/Pagination";
import React from "react";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const url = `http://localhost:5000/movies?title=${encodeURIComponent(searchTerm)}&limit=${limit}&offset=${offset}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        setMovies(data.movies);
        setTotalMovies(data.total);
        setError(null);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies. Please try again later.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchMovies, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, offset, limit]);

  const nextPage = () => {
    if (offset + limit < totalMovies) {
      setOffset(offset + limit);
    }
  };

  const prevPage = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <main>
      <h1>Catálogo de películas</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {error && <div role="alert"><span>{error}</span></div>}
      <Pagination offset={offset} limit={limit} totalMovies={totalMovies} nextPage={nextPage} prevPage={prevPage} />

      <section className="spaceTable">
        <MovieList movies={movies} loading={loading} />
      </section>
    </main>
  );
}
