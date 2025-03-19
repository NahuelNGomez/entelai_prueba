import React from "react"

interface MovieListProps {
  movies: Movie[]
  loading: boolean
}
export interface Movie {
  title: string
  genre?: string
  duration?: string
  avg_vote?: number
  director?: string
}

export default function MovieList({ movies, loading }: MovieListProps) {
  if (loading) {
    return (
      <div className="">
        {[...Array(8)].map((_, index) => (
          <div key={index} >
            <div />
            <div>
              <div />
              <div />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (movies.length === 0) {
    return (
      <div>
        <h3 >No movies found</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <section>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#b2b2b2" }}>
            <th style={{ padding: "8px", textAlign: "left" }}>Título</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Voto Promedio</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Género</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Director</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>{movie.title}</td>
              <td style={{ padding: "8px" }}>★ {movie.avg_vote}</td>
              <td style={{ padding: "8px" }}>{movie.genre}</td>
              <td style={{ padding: "8px" }}>{movie.director}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}