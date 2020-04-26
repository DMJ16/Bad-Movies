import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

//COMPONENTS
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

const App = (props) => {
  const [movies, setMovies] = useState([{ deway: "movies" }]);
  const [favorites, setFavorites] = useState([{ deway: "favorites" }]);
  const [showFaves, setShowFaves] = useState(false);

  // make an axios request to your server on the GET SEARCH endpoint
  useEffect(() => {
    const data = async () => await axios("/movies/search");
    setMovies(data.results);
  });

  const saveMovie = () => {
    // same as above but do something diff
  };

  const deleteMovie = () => {
    // same as above but do something diff
  };

  const swapFavorites = () => {
    setShowFaves(!showFaves);
  };

  return (
    <div className="app">
      <header className="navbar">
        <h1>Bad Movies</h1>
      </header>

      <div className="main">
        <Search swapFavorites={swapFavorites} showFaves={showFaves} />
        <Movies movies={showFaves ? favorites : movies} showFaves={showFaves} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
