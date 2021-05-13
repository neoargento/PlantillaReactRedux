import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAILS,
  REMOVE_MOVIE_FAVORITE,
} from "./actionTypes";

export const getMovies = (title) => {
  return (dispatch) => {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + title)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        dispatch({ type: GET_MOVIES, payload: datos });
      });
  };
};

export const getMovieDetails = (id) => {
  return (dispatch) => {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id + "&plot=full")
      .then((respuesta) => respuesta.json())
      .then((detalles) => {
        dispatch({ type: GET_MOVIE_DETAILS, payload: detalles });
      });
  };
};

export const addMovieFavorite = (payload) => {
  return { type: ADD_MOVIE_FAVORITE, payload };
};

export const removeMovieFavorite = (id) => {
  return { type: REMOVE_MOVIE_FAVORITE, payload: id };
};
