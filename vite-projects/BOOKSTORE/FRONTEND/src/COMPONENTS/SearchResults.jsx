import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const [results, setResults] = useState([]);
  const query = useQuery().get('query');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book/search", {
          params: { query }
        });
        setResults(res.data);
      } catch (error) {
        console.error("Error fetching search results: ", error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          Search Results for <span className="text-pink-500">"{query}"</span>
        </h1>
        <p className="mt-12">
          Discover books that match your search criteria. Whether you’re looking for thrilling mysteries, heartwarming romances, or insightful non-fiction, we have something for everyone.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-5 bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-lg shadow-lg">
        {results.length > 0 ? (
          results.map((item) => (
            <Cards key={item._id} item={item} />
          ))
        ) : (
          <p className="text-center col-span-5">No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
