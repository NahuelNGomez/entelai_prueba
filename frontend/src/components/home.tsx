"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import MovieList from  "../components/movieList"
import React from "react"

export default function Home() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>("")

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
        const url = searchTerm
          ? `http://localhost:5000/movies?title=${encodeURIComponent(searchTerm)}`
          : "http://localhost:5000/movies"

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Failed to fetch movies")
        }

        const data = await response.json()
        setMovies(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching movies:", err)
        setError("Failed to load movies. Please try again later.")
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    // Debounce the API call to avoid making too many requests
    const timeoutId = setTimeout(() => {
      fetchMovies()
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  return (
    <main>
      <h1>Movie Catalog</h1>

      <div >
        <Search size={20} />
        <input
          type="text"
          placeholder="Search movies by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error && (
        <div role="alert">
          <span>{error}</span>
        </div>
      )}

      <MovieList movies={movies} loading={loading} />
    </main>
  )
}
