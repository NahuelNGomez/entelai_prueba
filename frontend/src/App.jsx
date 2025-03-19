import { useState, useEffect } from "react";
import MovieList from "./components/movieList";
import SearchBar from "./components/searchBar";
import React from "react";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit] = useState(20); // Cantidad máxima de películas por página
  const [offset, setOffset] = useState(0); // Para moverse entre páginas
  const [totalMovies, setTotalMovies] = useState(0); // Total de películas disponibles

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
        setTotalMovies(data.total); // El backend debe devolver la cantidad total de películas
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
  }, [searchTerm, offset]);

  // Función para avanzar página
  const nextPage = () => {
    if (offset + limit < totalMovies) {
      setOffset(offset + limit);
    }
  };

  // Función para retroceder página
  const prevPage = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <main>
      <h1>Movie Catalog</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {error && <div role="alert"><span>{error}</span></div>}
      <div style={paginationStyle}>
        <button onClick={prevPage} disabled={offset === 0}>⬅️ Anterior</button>
        <span>
          Página {Math.floor(offset / limit) + 1} de {Math.ceil(totalMovies / limit)}
        </span>
        <button onClick={nextPage} disabled={offset + limit >= totalMovies}>Siguiente ➡️</button>
      </div>

      <MovieList movies={movies} loading={loading} />

    </main>
  );
}

const paginationStyle = {
  color: "#f3f3f3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "20px",
};