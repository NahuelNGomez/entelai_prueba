
import React from "react"

interface MovieListProps {
  movies: Movie[]
  loading: boolean
}
export interface Movie {
    id: number
    title: string
    poster_path?: string
    release_date?: string
    rating?: number
    overview?: string
  }

export default function MovieList({ movies, loading }: MovieListProps) {
  if (loading) {
    return (
      <div className="">
        {[...Array(8)].map((_, index) => (
          <div key={index} >
            <div/>
            <div>
              <div/>
              <div/>
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
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>
            {movie.poster_path ? (
              <img
                src={movie.poster_path || "/placeholder.svg"}
                alt={movie.title}
              />
            ) : (
              <div>No image</div>
            )}
          </div>
          <div >
            <h3>{movie.title}</h3>
            <p>
              {movie.release_date ? new Date(movie.release_date).getFullYear() : "Unknown year"}
            </p>
            {movie.rating && (
              <div>
                <span>
                  ★ {movie.rating}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}