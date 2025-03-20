import React from "react";
import "./SearchBar.css"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchBarStyle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="gray"
        style={{ flexShrink: 0 }}
      >
        <path
          fillRule="evenodd"
          d="M11 3a8 8 0 1 0 4.9 14.32l3.9 3.9a1 1 0 0 0 1.42-1.42l-3.9-3.9A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        placeholder="Filtrar películas por título..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="inputStyle"
      />
    </div>
  );
};