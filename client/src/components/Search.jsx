import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ swapFavorites, showFaves }) => {
  const [genres, setGenres] = useState([]);

  // make an axios request in this component
  //get the list of genres from your endpoint GET GENRES
  useEffect(() => {
    const fetch = async () => {
      const result = await axios("/movies/genres");
      setGenres(result.data);
    };
    fetch();
  }, []);

  return (
    <div className="search">
      <button
        onClick={() => {
          swapFavorites();
        }}
      >
        {showFaves ? "Show Results" : "Show Favorites"}
      </button>
      <br />
      <br />

      {/* Make the select options dynamic from genres !!! */}
      {/* How can you tell which option has been selected from here? */}

      <select>
        {genres.map((genre) => {
          return <option key={genre.name}>{genre.name}</option>;
        })}
      </select>
      <br />
      <br />

      <button>Search</button>
    </div>
  );
};

export default Search;
