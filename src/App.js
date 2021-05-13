import React from 'react'
import { Route } from 'react-router-dom'

// Componentes
import SearchBar from './components/SearchBar/SearchBar';
import Nav from './components/Nav/Nav';
import Favorites from './components/Favorites/Favorites';
import MovieDetails from './components/MovieDetails/MovieDetails';

// Archivo CSS
import './App.css';

function App() {
  return (
    <div className="App">

      <Route path='/' component={Nav}/>
      <Route exact path='/' component={SearchBar}/>
      <Route path='/favs' component={Favorites}/>
      <Route path='/movie/:id' component={MovieDetails}/>

    </div>
  );
}

export default App;
