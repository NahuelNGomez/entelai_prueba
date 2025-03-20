import React from "react";
import "./Pagination.css"

export default function Pagination({ offset, limit, totalMovies, nextPage, prevPage }) {
  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={offset === 0}>
        ⬅️ Anterior
      </button>
      <div className="spanStyle">
      <span>
        Página {Math.floor(offset / limit) + 1} de {Math.ceil(totalMovies / limit)}
      </span>
      <span>
        {totalMovies} resultados
      </span>
      </div>
      <button onClick={nextPage} disabled={offset + limit >= totalMovies}>
        Siguiente ➡️
      </button>
    </div>
  );
}