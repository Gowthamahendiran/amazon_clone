import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch search results from the backend when the component mounts
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/search-results?query=${query}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error("Failed to fetch search results:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      {searchResults.map((result) => (
        <div key={result._id}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
          <p>Price: {result.price}</p>
          {/* Add other details or styling as needed */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
