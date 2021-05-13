import {
    GET_MOVIES,
    GET_MOVIE_DETAILS,
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE,
  } from "../Actions/actionTypes";

const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search // Search viene de la Api
            }
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetail: action.payload
            }
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                // movieFavorites: state.movieFavorite.concat(action.payload),
                moviesFavorites: [...state.moviesFavorites, action.payload] // Eficiencia
            }
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(moviesFavorites => moviesFavorites.id !== action.payload)
            }
        default:
            return state
    }
}

export default rootReducer