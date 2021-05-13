import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../Redux/Actions'

const Favorites = ({ movies, removeMovieFavorite }) => {
    return (
    <div>
        <h2>Películas Favoritas</h2>
        {movies && movies.map((movie)=>(
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                {movie.title}
              </Link>
              <button onClick={() => removeMovieFavorite(movie.id)}>X</button>
            </div>
         ))}
      </div>
    )
}

function mapStateToProps(state) {
    return {
      movies: state.moviesFavorites
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

