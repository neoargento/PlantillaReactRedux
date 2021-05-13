import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getMovieDetails } from "../../Redux/Actions";

import './MovieDetails.css'

const MovieDetails = ({ match, movie, getMovieDetails }) => {

    useEffect(() => { 
        getMovieDetails(match.params.id)
    }, [])

    return (
        <div>
            <div className="movie-detail">Detalle de la pelicula: {movie.Title}</div>
            <div>Año: {movie.Year}</div>
            <div>Fecha de Estreno: {movie.Released}</div>
            <div>Director: {movie.Director}</div>
            <div>Género: {movie.Genre}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      getMovieDetails: (movie) => dispatch(getMovieDetails(movie)),
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)