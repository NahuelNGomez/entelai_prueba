import React from "react";
import "./MovieList.css"; // Importa los estilos

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
}

export interface Movie {
  title: string;
  genre?: string;
  duration?: string;
  avg_vote?: number;
  director?: string;
}

export default function MovieList({ movies, loading }: MovieListProps) {
  if (loading) {
    return <div className="loader fullWidth">
    <div className="loader-wheel"></div>
    <div className="loader-text"></div>
  </div>
  }

  if (movies.length === 0) {
    return (
      <div>
        <h3>No movies found</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <section>
      <table border={1}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Voto Promedio</th>
            <th>Género</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>★ {movie.avg_vote}</td>
              <td>{movie.genre}</td>
              <td>{movie.director}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}