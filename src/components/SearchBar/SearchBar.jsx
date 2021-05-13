import React, { useState } from "react";

// Redux
import { connect } from "react-redux"
import { getMovies, addMovieFavorite } from "../../Redux/Actions"

// CSS
import "./SearchBar.css";

const SearchBar = ({ moviesLoaded, addMovieFavorite, getMovies }) => {

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(title)
    setTitle("")
    console.log(title)
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Buscar Película: </label>
            <input type="text" value={title} onChange={handleChange}/>
            <button type="submit" value="">Lo intentamos</button>
        </form>
        <ul>
        {moviesLoaded.map(movie => (
            <li key={movie.imdbID}>
                {movie.Title}
            <button onClick={() => addMovieFavorite({title: movie.Title, id: movie.imdbID})}>
                +
            </button>
            </li>
        ))}
        </ul>
    </>
  );
};

function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);