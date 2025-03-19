import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={searchBarStyle}>
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
        placeholder="Search movies by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

const searchBarStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  padding: "8px 12px",
  width: "100%",
  maxWidth: "300px",
  backgroundColor: "#f9f9f9",
};

const inputStyle = {
  border: "none",
  outline: "none",
  flex: 1,
  fontSize: "14px",
  background: "transparent",
};
