import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers'

const alguito = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Store = createStore(rootReducer, alguito(applyMiddleware(thunk)))

export default Store